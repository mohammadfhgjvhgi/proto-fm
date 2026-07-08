import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir, unlink } from "fs/promises";
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

async function writeMetadata(items: MediaItem[]): Promise<void> {
  await mkdir(MEDIA_DIR, { recursive: true });
  await writeFile(METADATA_FILE, JSON.stringify(items, null, 2));
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0] ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * DELETE /api/media/delete?id=xxx — delete a media item
 * Requires simple password (same approach as before — not real auth, just gate)
 */
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const password = searchParams.get("pw");

  if (!id) {
    return NextResponse.json({ ok: false, error: "id required" }, { status: 400 });
  }

  // Simple gate — same PIN approach (separate from admin PIN)
  if (password !== "media2026") {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const items = await readMetadata();
    const item = items.find((i) => i.id === id);

    if (!item) {
      return NextResponse.json({ ok: false, error: "Media not found" }, { status: 404 });
    }

    // Delete file from disk
    try {
      await unlink(join(MEDIA_DIR, item.filename));
    } catch {
      // file already gone — fine
    }

    // Remove from metadata
    const updated = items.filter((i) => i.id !== id);
    await writeMetadata(updated);

    return NextResponse.json({ ok: true, deleted: item.filename });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err instanceof Error ? err.message : "Delete failed" },
      { status: 500 }
    );
  }
}

void getClientIp; // reserved for future rate limiting
