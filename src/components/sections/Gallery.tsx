"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryImages } from "@/data/site";

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visibleCount = 5;
  const maxStart = Math.max(0, galleryImages.length - visibleCount);

  function prev() {
    setStartIndex((i) => (i <= 0 ? maxStart : i - 1));
  }

  function next() {
    setStartIndex((i) => (i >= maxStart ? 0 : i + 1));
  }

  return (
    <section id="gallery" className="border-b pt-2 pb-12 md:pt-3 md:pb-16">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-4 text-base font-semibold tracking-tight md:text-lg">
          Gallery
        </h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="grid flex-1 grid-cols-5 gap-2">
            {Array.from({ length: visibleCount }, (_, offset) => {
              const i = startIndex + offset;
              const image = galleryImages[i];
              return (
                <Card
                  key={i}
                  className={cn(
                    "aspect-square cursor-pointer overflow-hidden transition hover:ring-2 hover:ring-primary",
                    activeIndex === i && "ring-2 ring-primary",
                  )}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  {image && (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  )}
                </Card>
              );
            })}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next gallery items"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border transition hover:bg-muted"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {activeIndex !== null && galleryImages[activeIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-[90vw] items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close enlarged image"
              className="absolute right-2 top-2 z-10 rounded-md bg-black/50 p-1 transition hover:bg-black/70"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              width={1200}
              height={1200}
              className="max-h-[85vh] w-auto object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
