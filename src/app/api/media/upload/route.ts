import { NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";

const MEDIA_DIR = join(process.cwd(), "storage", "media");
const METADATA_FILE = join(MEDIA_DIR, "metadata.json");
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10 MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100 MB

interface MediaItem {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number;
  type: "image" | "video";
  category: string;
  caption: string;
  uploadedAt: string;
}

async function readMetadata(): Promise<MediaItem[]> {
  try {
    const data = await readFile(METADATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeMetadata(items: MediaItem[]): Promise<void> {
  await mkdir(MEDIA_DIR, { recursive: true });
  await writeFile(METADATA_FILE, JSON.stringify(items, null, 2));
}

/**
 * POST /api/media/upload — multipart/form-data
 * Fields: file (File), category (string), caption (string)
 * Supports: images (jpg, png, webp, gif, svg) and videos (mp4, webm, mov)
 */
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const category = (formData.get("category") as string) || "gallery";
    const caption = (formData.get("caption") as string) || "";

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ ok: false, error: "No file provided" }, { status: 400 });
    }

    // Determine type
    const isImage = file.type.startsWith("image/");
    const isVideo = file.type.startsWith("video/");

    if (!isImage && !isVideo) {
      return NextResponse.json(
        { ok: false, error: "Only image and video files are supported" },
        { status: 400 }
      );
    }

    const maxSize = isImage ? MAX_IMAGE_SIZE : MAX_VIDEO_SIZE;
    if (file.size > maxSize) {
      return NextResponse.json(
        { ok: false, error: `File too large. Max ${isImage ? "10MB" : "100MB"} for ${isImage ? "images" : "videos"}` },
        { status: 413 }
      );
    }

    // Generate safe filename
    const ext = file.name.includes(".") ? file.name.split(".").pop() : "";
    const id = randomUUID();
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = ext
      ? `${id}-${safeName.replace(/\.[^.]+$/, "")}.${ext}`
      : `${id}-${safeName}`;

    // Ensure dir exists
    await mkdir(MEDIA_DIR, { recursive: true });

    // Write file
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(join(MEDIA_DIR, filename), buffer);

    // Save metadata
    const item: MediaItem = {
      id,
      filename,
      originalName: file.name,
      mimeType: file.type,
      size: file.size,
      type: isImage ? "image" : "video",
      category,
      caption,
      uploadedAt: new Date().toISOString(),
    };

    const items = await readMetadata();
    items.push(item);
    await writeMetadata(items);

    return NextResponse.json({
      ok: true,
      media: {
        ...item,
        url: `/api/media/serve/${item.id}`,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Upload failed" },
      { status: 500 }
    );
  }
}
