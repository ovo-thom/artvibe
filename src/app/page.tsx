import GalleryGrid from "@/components/GalleryGrid";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThemeFilters from "@/components/ThemeFilters";

export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <ThemeFilters />
      <GalleryGrid />
    </>
  );
}
