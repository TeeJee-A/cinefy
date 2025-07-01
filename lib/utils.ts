import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isEmail(value: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(value);
}
