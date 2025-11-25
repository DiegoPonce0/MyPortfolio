import { cn } from "../../lib/utils";
import * as React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        // clean card: white / dark background, soft border, rounded corners and subtle shadow
        "rounded-xl bg-white dark:bg-[#0F172A] border border-gray-200 dark:border-neutral-800 shadow-md hover:shadow-lg transform transition-colors transition-shadow duration-300",
        className
      )}
      {...props}
    />
  );
}