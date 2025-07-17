const Hero = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 px-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt="Image d'art statique"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/50 dark:bg-black/60 z-10" />
      <div className="relative z-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
          Explore l’Art Visuel
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto">
          Découvre des photos inspirantes issues d’Unsplash, filtrées par thèmes
          et accessibles en un clic.
        </p>
        <button className="px-8 py-3 rounded-full bg-white/20 hover:bg-white/40 text-white font-bold text-lg transition-colors duration-300 shadow-lg">
          Explorer la galerie
        </button>
      </div>
    </section>
  );
};

export default Hero;
