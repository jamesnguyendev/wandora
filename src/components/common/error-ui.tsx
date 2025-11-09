"use client";

import { useEffect } from "react";

import Link from "next/link";

import * as Sentry from "@sentry/nextjs";

import { Button } from "@/components/ui/button";

export default function ErrorUI({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center space-y-4 text-center">
          <div>
            <h1 className="text-5xl font-bold text-red-500">500</h1>
            <h2 className="mb-2 text-xl font-semibold">Internal Error</h2>
            <p>Something went wrong.</p>
            <p>{error.message}</p>
          </div>

          <Button className="w-full max-w-[200px] cursor-pointer" onClick={() => reset()}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
