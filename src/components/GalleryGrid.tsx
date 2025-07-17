"use client";
import { useEffect, useState } from "react";
import searchPhotos from "@/lib/unsplash";
import Image from "next/image";
import { Photo } from "@/lib/unsplash";
import Masonry from "react-masonry-css";
import { useTheme } from "./theme-context";

const breakpointColumnsObj = {
  default: 5,
  1200: 4,
  900: 3,
  600: 2,
  400: 1,
};

export default function GalleryGrid() {
  const { theme } = useTheme();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    async function fetchPhotos() {
      const results = await searchPhotos();
      setPhotos(results);
    }
    fetchPhotos();
  }, []);

  return (
    <section
      className={`px-4 py-3 sm:py-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {photos.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="w-full max-w-[1200px] mx-auto">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="masonry-column"
          >
            {photos.map((photo) => (
              <div
                key={photo.id}
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
