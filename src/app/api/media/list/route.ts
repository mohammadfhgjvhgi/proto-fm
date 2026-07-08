import { NextResponse } from "next/server";
import { readFile, readdir } from "fs/promises";
import { join } from "path";

const MEDIA_DIR = join(process.cwd(), "storage", "media");

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

const METADATA_FILE = join(MEDIA_DIR, "metadata.json");

async function readMetadata(): Promise<MediaItem[]> {
  try {
    const data = await readFile(METADATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

/**
 * GET /api/media/list — list all media items
 * Optional: ?type=image or ?type=video or ?category=gallery
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  try {
    let items = await readMetadata();
    if (type) items = items.filter((i) => i.type === type);
    if (category) items = items.filter((i) => i.category === category);

    // Check which files actually exist on disk
    let diskFiles: string[] = [];
    try {
      diskFiles = await readdir(MEDIA_DIR);
    } catch {
      // dir doesn't exist yet
    }

    const enriched = items.map((item) => ({
      ...item,
      exists: diskFiles.includes(item.filename),
      url: `/api/media/serve/${item.id}`,
    }));

    return NextResponse.json({ ok: true, media: enriched, total: enriched.length });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Failed to list media" },
      { status: 500 }
    );
  }
}
