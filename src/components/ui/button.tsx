import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors transition-transform duration-200 focus:outline-none disabled:opacity-60",
	{
		variants: {
			variant: {
				default:
					"bg-[#000000ff] text-white hover:bg-[#2c2c2cff] hover:shadow-md active:scale-95 focus:ring-2 focus:ring-[#4F46E5]/30 dark:bg-white dark:text-black dark:hover:bg-[#F3F4F6]",
				outline:
					"border border-[#E5E7EB] text-[#111827] hover:bg-[#F3F4F6] dark:border-neutral-700 dark:text-[#E2E8F0] dark:hover:bg-[#081226]",
			},
			size: {
				default: "h-10 px-5",
				sm: "h-8 px-3",
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
VariantProps<typeof buttonVariants> {}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, variant, size, ...props }, ref) => {
return (
<button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
);
}
);
Button.displayName = "Button";


export { Button };
