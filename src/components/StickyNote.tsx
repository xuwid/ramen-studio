import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: ReactNode;
  color?: "pink" | "blue" | "green" | "yellow";
  className?: string;
  rotation?: number;
  style?: React.CSSProperties;
}

const StickyNote = ({ children, color = "yellow", className, rotation, style }: StickyNoteProps) => {
  const colorClasses = {
    pink: "bg-sticky-pink",
    blue: "bg-sticky-blue", 
    green: "bg-sticky-green",
    yellow: "bg-sticky-yellow",
  };

  const rotationStyle = rotation ? { transform: `rotate(${rotation}deg)` } : {};
  const combinedStyle = { ...rotationStyle, ...style };

  return (
    <div
      className={cn(
        "p-4 rounded-lg shadow-md sticky-note",
        colorClasses[color],
        className
      )}
      style={combinedStyle}
    >
      {children}
    </div>
  );
};

export default StickyNote;