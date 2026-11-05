import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "full";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        size === "sm" && "max-w-4xl",
        size === "default" && "max-w-7xl",
        size === "lg" && "max-w-[1400px]",
        size === "full" && "max-w-none",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

