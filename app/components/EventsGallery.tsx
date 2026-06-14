"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";
import { FaArrowLeft, FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface EventGroup {
  name: string;
  images: string[];
}

const events: EventGroup[] = [
  {
    name: "Expo Dubai",
    images: [
      "/events/Expo-Dubai/IMG_1324.jpg",
      "/events/Expo-Dubai/IMG_1315.jpg",
      "/events/Expo-Dubai/IMG_1314.jpg",
      "/events/Expo-Dubai/IMG_1322.jpg",
      "/events/Expo-Dubai/IMG_1313.jpg",
      "/events/Expo-Dubai/IMG_1321.jpg",
      "/events/Expo-Dubai/IMG_1312.jpg",
      "/events/Expo-Dubai/IMG_1320.jpg",
      "/events/Expo-Dubai/IMG_1311.jpg",
      "/events/Expo-Dubai/IMG_1319.jpg",
      "/events/Expo-Dubai/IMG_1310.jpg",
      "/events/Expo-Dubai/IMG_1318.jpg",
      "/events/Expo-Dubai/IMG_1309.jpg",
      "/events/Expo-Dubai/IMG_1317.jpg",
      "/events/Expo-Dubai/IMG_1308.jpg",
      "/events/Expo-Dubai/IMG_1316.jpg",
    ],
  },
  {
    name: "Intermodal Europe 2023",
    images: [
      "/events/Intermodal/intermodal-europe-2023/IMG_1307.jpg",
      "/events/Intermodal/intermodal-europe-2023/IMG_1306.jpg",
      "/events/Intermodal/intermodal-europe-2023/IMG_1305.jpg",
      "/events/Intermodal/intermodal-europe-2023/IMG_1304.jpg",
    ],
  },
  {
    name: "Breakbulk Middle East",
    images: [
      "/events/Breakbulk-Middle-East/IMG_0637.jpeg",
      "/events/Breakbulk-Middle-East/IMG_0631.jpeg",
      "/events/Breakbulk-Middle-East/IMG_0624.jpeg",
      "/events/Breakbulk-Middle-East/IMG_0577.jpeg",
      "/events/Breakbulk-Middle-East/IMG_0574.jpeg",
    ],
  },
  {
    name: "Intermodal 2022",
    images: [
      "/events/Intermodal/intermodal-2022/IMG_0162.jpeg",
    ],
  },
  {
    name: "Saudi Arabia",
    images: [
      "/events/Saudi-Arabia/IMG_0336.jpeg",
    ],
  },
];

const allImages = events.flatMap((e) => e.images);

export function EventsGallery() {
  const { lang } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string | null>(null);

  const filteredImages = filter
    ? events.find((e) => e.name === filter)?.images ?? []
    : allImages;

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, closeLightbox, goNext, goPrev]);

  const currentGroup = filter;

  return (
    <section id="eventos" className="bg-[#f7f6f2] py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-subtitle)] text-xs uppercase tracking-[0.42em] text-[#c1a45f]">
            {lang === "es" ? "Eventos" : "Events"}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-balance text-[#0b1e3e] sm:text-5xl">
            {lang === "es" ? "Eventos a los que hemos asistido" : "Events we have attended"}
          </h2>
          <p className="mt-4 text-sm text-[#3b3b3b] font-[family-name:var(--font-subtitle)] max-w-xl mx-auto">
            {lang === "es"
              ? "Conoce nuestra participación en ferias y conferencias del sector marítimo a nivel global."
              : "See our participation in maritime industry fairs and conferences worldwide."}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-subtitle)] transition-all ${
              !filter
                ? "bg-[#0b1e3e] text-[#f7f6f2]"
                : "bg-white text-[#3b3b3b] border border-[rgba(11,30,62,0.12)] hover:border-[#c1a45f]"
            }`}
          >
            {lang === "es" ? "Todos" : "All"}
          </button>
          {events.map((event) => (
            <button
              key={event.name}
              onClick={() => setFilter(event.name)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] font-[family-name:var(--font-subtitle)] transition-all ${
                filter === event.name
                  ? "bg-[#0b1e3e] text-[#f7f6f2]"
                  : "bg-white text-[#3b3b3b] border border-[rgba(11,30,62,0.12)] hover:border-[#c1a45f]"
              }`}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        {filter ? (
          /* Single event - bigger images */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((src, idx) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden border border-[rgba(11,30,62,0.08)] bg-white cursor-zoom-in group shadow-[0_4px_15px_rgba(11,30,62,0.05)] hover:shadow-[0_12px_35px_rgba(11,30,62,0.12)] transition-all duration-300"
                onClick={() => openLightbox(idx)}
              >
                <Image
                  src={src}
                  alt={`${filter} ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        ) : (
          /* All events - grouped layout */
          <div className="space-y-12">
            {events.map((event) => (
              <div key={event.name}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-[#0b1e3e]">
                    {event.name}
                  </h3>
                  <button
                    onClick={() => setFilter(event.name)}
                    className="text-xs uppercase tracking-[0.2em] text-[#c1a45f] hover:text-[#9e8245] transition-colors font-[family-name:var(--font-subtitle)]"
                  >
                    {lang === "es" ? "Ver todo" : "View all"}
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {event.images.slice(0, 4).map((src, idx) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden border border-[rgba(11,30,62,0.08)] bg-white cursor-zoom-in group shadow-[0_4px_15px_rgba(11,30,62,0.05)] hover:shadow-[0_12px_35px_rgba(11,30,62,0.12)] transition-all duration-300"
                      onClick={() => {
                        const globalIdx = allImages.indexOf(src);
                        openLightbox(globalIdx);
                      }}
                    >
                      <Image
                        src={src}
                        alt={`${event.name} ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reset filter button when filtering */}
        {filter && (
          <div className="text-center mt-8">
            <button
              onClick={() => setFilter(null)}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#c1a45f] hover:text-[#9e8245] transition-colors font-[family-name:var(--font-subtitle)]"
            >
              <FaArrowLeft className="text-[10px]" />
              {lang === "es" ? "Ver todos los eventos" : "View all events"}
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 text-white/70 hover:text-white text-2xl w-10 h-10 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <FaXmark />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-white/60 text-sm font-[family-name:var(--font-subtitle)] tracking-[0.15em]">
            {currentIndex + 1} / {filteredImages.length}
          </div>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-3 sm:left-6 z-10 text-white/70 hover:text-white text-xl sm:text-3xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transition-colors cursor-pointer bg-black/20 hover:bg-black/40 rounded-full"
            aria-label="Previous"
          >
            <FaChevronLeft />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] mx-12 sm:mx-20 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[currentIndex]}
              alt={`Event image ${currentIndex + 1}`}
              width={1400}
              height={1000}
              className="w-full h-auto max-h-[85vh] object-contain rounded-sm"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-3 sm:right-6 z-10 text-white/70 hover:text-white text-xl sm:text-3xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center transition-colors cursor-pointer bg-black/20 hover:bg-black/40 rounded-full"
            aria-label="Next"
          >
            <FaChevronRight />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {filteredImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "bg-[#c1a45f] w-4 sm:w-5"
                    : "bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
