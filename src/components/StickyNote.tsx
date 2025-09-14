import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: ReactNode;
  color?: "pink" | "rose" | "peach" | "blue" | "green" | "yellow" | "lavender";
  className?: string;
  rotation?: number;
  style?: React.CSSProperties;
  special?: boolean;
}

const StickyNote = ({ children, color = "yellow", className, rotation, style, special = false }: StickyNoteProps) => {
  const colorClasses = {
    pink: "bg-sticky-pink",
    rose: "bg-sticky-rose",
    peach: "bg-sticky-peach",
    blue: "bg-sticky-blue", 
    green: "bg-sticky-green",
    yellow: "bg-sticky-yellow",
    lavender: "bg-sticky-lavender",
  };

  const rotationStyle = rotation ? { transform: `rotate(${rotation}deg)` } : {};
  const combinedStyle = { ...rotationStyle, ...style };

  return (
    <div
      className={cn(
        "p-4 rounded-lg shadow-md sticky-note transition-all duration-300",
        colorClasses[color],
        special && "special",
        className
      )}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default StickyNote;