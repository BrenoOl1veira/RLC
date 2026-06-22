import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-construction-yellow text-construction-black shadow-lift hover:-translate-y-0.5 hover:bg-construction-amber focus-visible:outline-construction-yellow",
        dark:
          "bg-construction-black text-white hover:-translate-y-0.5 hover:bg-construction-graphite focus-visible:outline-construction-yellow",
        outline:
          "border border-white/30 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:border-construction-yellow hover:bg-construction-yellow hover:text-construction-black focus-visible:outline-construction-yellow",
        ghost:
          "text-construction-black hover:bg-construction-yellow/20 focus-visible:outline-construction-yellow"
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-5",
        lg: "h-14 px-7 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
