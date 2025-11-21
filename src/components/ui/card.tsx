import { cn } from "../../lib/utils";
import * as React from "react";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 shadow-sm",
        className
      )}
      {...props}
    />
  );
}