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
            <div className="flex h-full w-full items-center justify-center text-muted-foreground transition-colors group-hover:text-primary">
              <span className="text-xs uppercase tracking-wider">{img.alt}</span>
            </div>
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
            <div className="flex aspect-video items-center justify-center rounded bg-secondary text-muted-foreground">
              <span className="text-sm uppercase tracking-wider">
                {images[selected].alt}
              </span>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PhotoGallery;
