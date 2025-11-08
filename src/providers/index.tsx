"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

import { Toaster } from "@/components/ui/sonner";
import { PreferencesStoreProvider } from "@/stores/preferences/preferences-provider";

const queryClient = new QueryClient();

export function Providers({
  children,
  themeMode,
  themePreset,
}: {
  children: React.ReactNode;
  themeMode: string;
  themePreset: string;
}) {
  return (
    <PreferencesStoreProvider
      themeMode={themeMode as "light" | "dark"}
      themePreset={themePreset as "tangerine" | "soft-pop" | "default" | "brutalist"}
    >
      <SessionProvider>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </SessionProvider>
      {/* <AuthProvider></AuthProvider> Automattic for refresh token */}
      <Toaster />
    </PreferencesStoreProvider>
  );
}
