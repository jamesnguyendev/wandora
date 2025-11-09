"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center space-y-2 text-center">
      <h1 className="text-2xl font-semibold">Page not found.</h1>
      <p className="text-muted-foreground">Your page is not found.</p>
      <Link replace href="/homes">
        <Button variant="destructive" className="cursor-pointer">
          Home
        </Button>
      </Link>
    </div>
  );
}
