"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { useTheme } from "./theme-context";
import { apiKey } from "@/lib/unsplash";
import type { Photo } from "@/lib/unsplash";

const breakpointColumnsObj = {
  default: 5,
  1200: 4,
  900: 3,
  600: 2,
  400: 1,
};

interface GalleryGridProps {
  selectedTheme: string;
  inputSearch: string;
}

export default function GalleryGrid({
  selectedTheme,
  inputSearch,
}: GalleryGridProps) {
  const { theme } = useTheme();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  console.log(photos);

  useEffect(() => {
    if (!selectedTheme) {
      setPhotos([]);
      return;
    }
    setLoading(true);
    const fetchPhotos = async () => {
      const perPage = 12;
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${selectedTheme}&per_page=${perPage}&client_id=${apiKey}`
      );
      if (!res.ok) {
        setPhotos([]);
        setLoading(false);
        return;
      }
      const data = await res.json();
      setPhotos(data.results);
      setLoading(false);
    };
    fetchPhotos();
  }, [selectedTheme]);

  const filteredPhotos = photos.filter(
    (photo) =>
      inputSearch.trim() === "" ||
      photo.description?.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <section
      className={`px-4 py-3 sm:py-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {loading ? (
        <p>Loading...</p>
      ) : filteredPhotos.length === 0 && selectedTheme ? (
        <p className="text-center text-gray-400">
          Aucune image trouvée ou en cours de chargement...
        </p>
      ) : (
        <div className="w-full max-w-[1200px] mx-auto">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="masonry-column"
          >
            {filteredPhotos.map((photo, index) => (
              <div
                key={photo.id + "-" + index}
                className="mb-4 rounded-lg overflow-hidden relative transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={photo.urls.small}
                  alt={photo.alt_description || "Photo"}
                  width={photo.width}
                  height={photo.height}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                  className="rounded-lg max-h-64 sm:max-h-none"
                  priority={false}
                />
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </section>
  );
}
