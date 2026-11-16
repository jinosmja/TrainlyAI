import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] select-none",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/95 hover:shadow-sm",
        teal:
          "bg-teal-600 text-white shadow-xs hover:bg-teal-700 hover:shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
        outline:
          "border border-border bg-card text-foreground shadow-xs hover:bg-muted/70 hover:text-foreground hover:border-slate-300 dark:hover:border-slate-700",
        secondary:
          "border border-teal-200 bg-teal-50 text-teal-800 hover:bg-teal-100/80 dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-300",
        ghost:
          "text-muted-foreground hover:bg-muted/70 hover:text-foreground",
        link:
          "text-primary underline-offset-4 hover:underline p-0 h-auto font-medium",
        accent:
          "bg-gradient-to-r from-primary to-indigo-600 text-white shadow-xs hover:from-primary/95 hover:to-indigo-700",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-6 text-base font-bold",
        icon: "h-10 w-10 rounded-lg",
        "icon-sm": "h-8 w-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
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
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
