"use client";

import { useState, useEffect, useCallback } from "react";
import { useLanguageStore } from "@/lib/store";
import { SiteLayout } from "@/components/site/site-layout";
import { PageHeader, BackLink } from "@/components/site/page-header";
import { Upload, Trash2, Image as ImageIcon, Video, RefreshCw, AlertCircle, CheckCircle2, X } from "lucide-react";

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
  exists: boolean;
  url: string;
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function MediaPage() {
  const lang = useLanguageStore((s) => s.lang);
  const [items, setItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [category, setCategory] = useState("gallery");
  const [caption, setCaption] = useState("");
  const [filter, setFilter] = useState<"all" | "image" | "video">("all");
  const [previewItem, setPreviewItem] = useState<MediaItem | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/media/list");
      const data = await res.json();
      if (data.ok) setItems(data.media);
      else setError(data.error || "Load failed");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError("");
    setSuccess("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("category", category);
      fd.append("caption", caption);
      const res = await fetch("/api/media/upload", { method: "POST", body: fd });
      const data = await res.json();
      if (data.ok) {
        setSuccess(`${file.name} — ${lang === "ar" ? "تم الرفع" : "uploaded"}`);
        setCaption("");
        load();
      } else {
        setError(data.error || "Upload failed");
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  const onDelete = async (id: string, name: string) => {
    const pw = prompt(lang === "ar" ? "كلمة المرور للحذف:" : "Delete password:");
    if (!pw) return;
    if (!confirm(`${lang === "ar" ? "حذف" : "Delete"} "${name}"?`)) return;
    try {
      const res = await fetch(`/api/media/delete?id=${id}&pw=${pw}`, { method: "DELETE" });
      const data = await res.json();
      if (data.ok) load();
      else setError(data.error || "Delete failed");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Network error");
    }
  };

  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <SiteLayout>
      <PageHeader
        sectionNumber="MEDIA"
        title={lang === "ar" ? "إدارة الصور والفيديوهات" : "Media Manager"}
        subtitle={lang === "ar" ? "ارفع وأدر صور مشروعك وفيديوهاته. يدعم: JPG, PNG, WebP, GIF, SVG, MP4, WebM, MOV" : "Upload and manage project photos and videos. Supports: JPG, PNG, WebP, GIF, SVG, MP4, WebM, MOV"}
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          {error && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-[var(--accent-alert)]/30 bg-[var(--accent-alert)]/10 px-4 py-3 text-sm text-[var(--accent-alert)]">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span className="flex-1">{error}</span>
              <button onClick={() => setError("")} className="shrink-0"><X className="h-4 w-4" /></button>
            </div>
          )}
          {success && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] px-4 py-3 text-sm text-[var(--accent)]">
              <CheckCircle2 className="h-4 w-4 shrink-0" />
              <span className="flex-1">{success}</span>
              <button onClick={() => setSuccess("")} className="shrink-0"><X className="h-4 w-4" /></button>
            </div>
          )}

          {/* Upload zone */}
          <div className="glass-card mb-8 p-6">
            <h2 className="mb-4 text-sm font-medium text-[var(--text)]">
              {lang === "ar" ? "رفع ملف جديد" : "Upload new file"}
            </h2>
            <div className="grid gap-4 sm:grid-cols-[1fr_200px_1fr_auto]">
              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-[var(--border)] p-6 text-center transition-colors hover:border-[var(--accent)]">
                <Upload className="h-6 w-6 text-[var(--text-dim)]" />
                <span className="mt-2 text-sm text-[var(--text-muted)]">
                  {lang === "ar" ? "اختر صورة أو فيديو" : "Choose image or video"}
                </span>
                <input type="file" accept="image/*,video/*" onChange={onUpload} className="hidden" disabled={uploading} />
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              >
                <option value="gallery">{lang === "ar" ? "معرض المشروع" : "Project gallery"}</option>
                <option value="components">{lang === "ar" ? "المكونات" : "Components"}</option>
                <option value="wiring">{lang === "ar" ? "التوصيل" : "Wiring"}</option>
                <option value="testing">{lang === "ar" ? "الاختبار" : "Testing"}</option>
                <option value="final">{lang === "ar" ? "النتيجة النهائية" : "Final result"}</option>
                <option value="diagram">{lang === "ar" ? "مخططات" : "Diagrams"}</option>
                <option value="personal">{lang === "ar" ? "شخصي" : "Personal"}</option>
              </select>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder={lang === "ar" ? "وصف مختصر (اختياري)" : "Caption (optional)"}
                className="rounded-xl border border-[var(--border)] bg-[var(--bg-soft)] px-3 py-2 text-sm text-[var(--text)] outline-none focus:border-[var(--accent)]"
              />
              <span className="self-center text-xs text-[var(--text-dim)]">
                {uploading ? (lang === "ar" ? "جارٍ الرفع..." : "Uploading...") : ""}
              </span>
            </div>
            <p className="mt-3 text-xs text-[var(--text-dim)]">
              {lang === "ar" ? "الحد الأقصى: صور 10MB، فيديوهات 100MB" : "Max: images 10MB, videos 100MB"}
            </p>
          </div>

          {/* Filter + refresh */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              {(["all", "image", "video"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={
                    "rounded-full px-3 py-1.5 text-sm transition-colors " +
                    (filter === f
                      ? "bg-[var(--accent)] text-[var(--bg)]"
                      : "border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]")
                  }
                >
                  {f === "all" ? (lang === "ar" ? "الكل" : "All") : f === "image" ? (lang === "ar" ? "صور" : "Images") : (lang === "ar" ? "فيديو" : "Videos")}
                </button>
              ))}
            </div>
            <button
              onClick={load}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1.5 text-sm text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              {lang === "ar" ? "تحديث" : "Reload"}
            </button>
          </div>

          {/* Media grid */}
          {loading ? (
            <div className="flex items-center justify-center py-12 text-[var(--text-muted)]">
              <RefreshCw className="h-5 w-5 animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-sm text-[var(--text-dim)]">
              {lang === "ar" ? "لا توجد ملفات بعد. ارفع أول صورة أو فيديو." : "No files yet. Upload your first image or video."}
            </div>
          ) : (
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((item) => (
                <li key={item.id} className="glass-card overflow-hidden">
                  {/* Thumbnail */}
                  <button
                    onClick={() => setPreviewItem(item)}
                    className="relative block aspect-video w-full overflow-hidden bg-[var(--bg-soft)]"
                  >
                    {item.type === "image" ? (
                      <img
                        src={item.url}
                        alt={item.caption || item.originalName}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--text-dim)]">
                        <Video className="h-8 w-8" />
                        <span className="text-xs">Video</span>
                      </div>
                    )}
                    {!item.exists && (
                      <div className="absolute inset-0 bg-[var(--accent-alert)]/20" />
                    )}
                  </button>

                  {/* Info */}
                  <div className="p-3">
                    <div className="flex items-center gap-2">
                      {item.type === "image" ? (
                        <ImageIcon className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
                      ) : (
                        <Video className="h-3.5 w-3.5 shrink-0 text-[var(--accent-2)]" />
                      )}
                      <span className="truncate text-xs font-medium text-[var(--text)]">{item.caption || item.originalName}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[var(--text-dim)]">
                        {formatSize(item.size)} · {item.category}
                      </span>
                      <button
                        onClick={() => onDelete(item.id, item.originalName)}
                        className="text-[var(--text-dim)] transition-colors hover:text-[var(--accent-alert)]"
                        aria-label="delete"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* URL reference for Mohammed */}
          {filtered.length > 0 && (
            <div className="mt-8 rounded-xl border border-[var(--accent)]/30 bg-[var(--accent-soft)] p-4">
              <p className="text-sm text-[var(--accent)]">
                {lang === "ar" ? "💡 لاستخدام صورة في الموقع: انسخ الرابط من الصورة وضعه في content.ts" : "💡 To use a media item in the site: copy its URL and put it in content.ts"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Preview modal */}
      {previewItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setPreviewItem(null)}
        >
          <div className="relative max-h-[90vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute -top-10 right-0 text-white/70 hover:text-white"
              aria-label="close"
            >
              <X className="h-6 w-6" />
            </button>
            {previewItem.type === "image" ? (
              <img
                src={previewItem.url}
                alt={previewItem.caption || previewItem.originalName}
                className="max-h-[80vh] max-w-full rounded-xl"
              />
            ) : (
              <video
                src={previewItem.url}
                controls
                className="max-h-[80vh] max-w-full rounded-xl"
              />
            )}
            <div className="mt-3 text-center">
              <p className="text-sm text-white/80">{previewItem.caption || previewItem.originalName}</p>
              <p className="mt-1 font-mono text-xs text-white/50">
                {previewItem.originalName} · {formatSize(previewItem.size)} · {previewItem.mimeType}
              </p>
              <p className="mt-2 font-mono text-xs text-[var(--accent)]">
                URL: {previewItem.url}
              </p>
            </div>
          </div>
        </div>
      )}

      <BackLink />
    </SiteLayout>
  );
}
