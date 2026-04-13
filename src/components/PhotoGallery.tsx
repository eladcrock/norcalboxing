import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface PhotoGalleryProps {
  images: { src: string; alt: string }[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-secondary"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 border border-transparent transition-colors group-hover:border-primary rounded-lg" />
          </button>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl border-border bg-card p-2">
          <VisuallyHidden>
            <DialogTitle>Gallery image</DialogTitle>
          </VisuallyHidden>
          {selected !== null && (
            <img
              src={images[selected].src}
              alt={images[selected].alt}
              className="w-full h-auto rounded"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;