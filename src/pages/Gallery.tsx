import { useEffect, useState } from "react";

type ImageItem = {
  imageId: string;
};

export default function Gallery() {
  const [images, setImages] = useState<ImageItem[]>([]);

  useEffect(() => {
    fetch("/api/gallery")
      .then(res => res.json())
      .then(setImages)
      .catch(() => setImages([]));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Our Work
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {images.length === 0 && (
          <p className="col-span-full text-center">
            Gallery images will appear here.
          </p>
        )}

        {images.map(img => (
          <img
            key={img.imageId}
            src={`https://imagedelivery.net/ACCOUNT_HASH/${img.imageId}/public`}
            className="rounded shadow"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
