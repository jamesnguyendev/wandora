"use client";

import ErrorUI from "@/components/common/error-ui";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return <ErrorUI error={error} reset={reset} />;
}
