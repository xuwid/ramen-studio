import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        kawaii: "bg-gradient-to-r from-palette-red-violet to-palette-rose-red text-white font-bold rounded-full shadow-lg kawaii-shadow hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-white/30 hero-button",
        neon: "bg-gradient-to-r from-palette-red-violet to-palette-rose-red text-white font-bold rounded-full border-2 border-palette-red-violet/50 neon-glow hover:scale-105 shadow-lg hero-button",
        sticky: "bg-gradient-to-br from-palette-columbia-blue to-palette-slate-gray text-foreground font-semibold rounded-full transform rotate-1 hover:rotate-0 hover:scale-105 shadow-md sticky-note",
        wood: "bg-gradient-to-r from-palette-bistre to-palette-red-violet text-white font-bold rounded-full border-2 border-palette-rose-red/30 hover:scale-105 shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
