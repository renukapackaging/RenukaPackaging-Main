import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  text?: string;
  className?: string;
  aspectRatio?: "square" | "video" | "wide" | "portrait";
}

const aspectRatioClasses = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[2/1]",
  portrait: "aspect-[3/4]",
};

export function PlaceholderImage({
  text = "Image Placeholder",
  className,
  aspectRatio = "video",
}: PlaceholderImageProps) {
  return (
    <div
      className={cn(
        "placeholder-gradient rounded-lg flex items-center justify-center border border-border/50",
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      <span className="text-muted-foreground text-sm font-medium px-4 text-center">
        {text}
      </span>
    </div>
  );
}
