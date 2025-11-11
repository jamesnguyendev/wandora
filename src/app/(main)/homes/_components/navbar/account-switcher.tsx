"use client";

import { LogIn, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn, getInitials } from "@/lib/utils";

import { ThemeSwitcher } from "./theme-switcher";
import Link from "next/link";

export function AccountSwitcher() {
  const { data: session } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="size-9 cursor-pointer rounded-lg">
          {session?.user.id ? (
            <AvatarImage src={"/avatars/arhamkhnz.png"} alt={"No alt"} />
          ) : (
            <div className="dark:bg-accent flex aspect-square size-full items-center justify-center bg-gray-400">
              W.
            </div>
          )}
          <AvatarFallback className="rounded-lg">{getInitials(String(session?.user.name))}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56 space-y-1 rounded-lg" side="bottom" align="end" sideOffset={4}>
        {session?.user.id && (
          <DropdownMenuItem key={session?.user.id} className={cn("p-0", "bg-accent/50 border-l-primary border-l-2")}>
            <div className="flex w-full items-center justify-between gap-2 px-1 py-1.5">
              <Avatar className="size-9 rounded-lg">
                <AvatarImage src={session?.user.image || "/avatars/arhamkhnz.png"} alt={"No alt"} />
                <AvatarFallback className="rounded-lg">{getInitials(String(session?.user.name))}</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{session?.user.name}</span>
                <span className="truncate text-xs capitalize">{session?.user.email}</span>
                <span className="truncate text-xs capitalize">{session?.user.role}</span>
              </div>
            </div>
          </DropdownMenuItem>
        )}

        <DropdownMenuSeparator hidden={!session?.user.id} />
        <DropdownMenuItem className="cursor-pointer">
          <ThemeSwitcher />
        </DropdownMenuItem>

        {session?.user.id ? (
          <DropdownMenuItem className="cursor-pointer" onClick={() => signOut({ callbackUrl: "/" })}>
            <LogOut />
            Log out
          </DropdownMenuItem>
        ) : (
          <Link href={"/auth/login"}>
            <DropdownMenuItem className="cursor-pointer">
              <LogIn />
              Log in
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
