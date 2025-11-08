import { ReactNode } from "react";

import MainNavbar from "./_components/navbar/main-navbar";

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MainNavbar />
      <div className="h-full p-4 md:p-6 md:pt-16">{children}</div>
    </>
  );
}
