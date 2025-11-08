import { ReactNode } from "react";

import MainFooter from "./_components/footer/main-footer";
import MainNavbar from "./_components/navbar/main-navbar";

export default async function Layout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <MainNavbar />
      <div className="bg-card h-full p-4 pt-16">{children}</div>
      <MainFooter />
    </>
  );
}
