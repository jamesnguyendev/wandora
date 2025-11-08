"use client";
import { useEffect, useState } from "react";

import { users } from "@/data/users";

import { AccountSwitcher } from "./account-switcher";
import Category from "./category";
import LogoApp from "./logo-app";
import SearchBox from "./search-box";

const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-40 w-full shrink-0 items-center gap-2 border-b py-1.5 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ${
        scrolled ? "bg-white/10 shadow-md backdrop-blur-sm" : ""
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 lg:px-6">
        <LogoApp />
        <SearchBox />
        <div className="flex items-center gap-2">
          <Category />
          <AccountSwitcher users={users} />
        </div>
      </div>
    </header>
  );
};

export default MainNavbar;
