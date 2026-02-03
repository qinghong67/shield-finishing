import { useState } from "react";

export default function GalleryAdmin() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const upload = async () => {
    if (!file) return;

    const form = new FormData();
    form.append("image", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: form
      });

      setMessage(res.ok ? "Upload successful" : "Upload failed");
    } catch {
      setMessage("Upload error");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6">
        Gallery Admin
      </h1>

      <input
        type="file"
        onChange={e => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={upload}
        className="ml-4 px-6 py-2 bg-slate-900 text-white rounded"
      >
        Upload
      </button>

      {message && (
        <p className="mt-4 font-semibold">{message}</p>
      )}
    </div>
  );
}
