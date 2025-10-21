import React from "react";
import { Container } from "@/components/index";
import { ModeToggle } from "./thememode";
import Link from "next/link";
import SearchHeader from "./searchheader";
import SidebarController from "../sidebar/sidebarcontroller";

export default function Header() {
  return (
    <header className="dark:bg-indigo-700 py-2.5 bg-gray-100 dark:shadow-[0px_0px_20px_5px_rgba(67,_56,_202,_0.5)] shadow-[0px_10px_20px_0px_rgba(0,_0,_0,_0.1)]">
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <div className="">
              <Link
                href="/auth/login"
                className="hidden text-white md:flex bg-gradient-to-l rounded-md p-2 from-green-700 to-green-400 cursor-pointer dark:from-indigo-500 dark:to-pink-500"
              >
                لاگین
              </Link>
            </div>
            <div>
              <ModeToggle />
            </div>
            <div className="hidden md:flex">
              <span className="flex">
                <SearchHeader />
              </span>
            </div>
          </div>
          <div>
            <Link href="/">
              <h2 className="font-extrabold text-xl text-primary">بلاگ تریپ</h2>
            </Link>
          </div>
          <SidebarController />
        </nav>
      </Container>
    </header>
  );
}
