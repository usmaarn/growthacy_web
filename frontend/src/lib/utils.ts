import cookies from "js-cookie";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function storeToken(token: string, expiresAt?: string) {
    cookies.set("accessToken", token, {path: "/", sameSite: "strict"})
}

export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}