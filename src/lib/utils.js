import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names conditionally and with tailwind-merge.
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
