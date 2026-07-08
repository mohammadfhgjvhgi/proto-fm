import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

const MEDIA_DIR = join(process.cwd(), "storage", "media");
const METADATA_FILE = join(MEDIA_DIR, "metadata.json");

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

/**
 * GET /api/media/serve/[id] — serve a media file (image or video)
 * Supports range requests for video streaming.
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ ok: false, error: "id required" }, { status: 400 });
  }

  try {
    const items = await readMetadata();
    const item = items.find((i) => i.id === id);

    if (!item) {
      return NextResponse.json({ ok: false, error: "Media not found" }, { status: 404 });
    }

    let buffer: Buffer;
    try {
      buffer = await readFile(join(MEDIA_DIR, item.filename));
    } catch {
      return NextResponse.json(
        { ok: false, error: "File missing from disk" },
        { status: 410 }
      );
    }

    // For videos, support range requests
    const range = request.headers.get("range");
    if (range && item.type === "video") {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0] ?? "0", 10);
      const end = parts[1] ? parseInt(parts[1], 10) : buffer.length - 1;
      const chunk = buffer.subarray(start, end + 1);

      return new NextResponse(new Uint8Array(chunk), {
        status: 206,
        headers: {
          "Content-Range": `bytes ${start}-${end}/${buffer.length}`,
          "Accept-Ranges": "bytes",
          "Content-Length": chunk.length.toString(),
          "Content-Type": item.mimeType,
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      });
    }

    return new NextResponse(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": item.mimeType,
        "Content-Length": item.size.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
        "Content-Disposition": `inline; filename="${encodeURIComponent(item.originalName)}"`,
      },
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Serve failed" },
      { status: 500 }
    );
  }
}
