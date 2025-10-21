"use client";
import React, { JSX } from "react";
import Link from "next/link";
import { DropdownSidebar } from "./dropdownsidebar";
import { Briefcase, X as CloseIcon, Contact, Home } from "lucide-react";
import Favorate from "./favorate";
import SearchHeader from "../header/searchheader";
import SearchSidebar from "./searchsidebar";

interface AppSidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export function AppSidebar({
  isSidebarOpen,
  toggleSidebar,
}: AppSidebarProps): JSX.Element {
  return (
    <>
      <aside
        className={`
          fixed top-0 right-0 h-full w-64 p-4 
          bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-xl 
          transform transition-transform duration-300 ease-in-out z-50
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold cursor-context-menu">
            صفحات وبسایت
          </h3>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-full text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            aria-label="بستن سایدبار"
          >
            <CloseIcon size={24} />
          </button>
        </div>

        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              onClick={toggleSidebar}
              className="flex gap-2 hover:text-primary-onHover"
            >
              <Home />
              صفحه اصلی
            </Link>
          </li>
          <li>
            <Link
              href="/about-us"
              onClick={toggleSidebar}
              className="flex gap-2 hover:text-primary-onHover"
            >
              <Briefcase />
              درباره ما
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              onClick={toggleSidebar}
              className="flex gap-2 hover:text-primary-onHover"
            >
              <Contact />
              تماس با ما
            </Link>
          </li>
          <li>
            <DropdownSidebar />
          </li>
          <li>
            <span className="flex">
              <Favorate />
            </span>
          </li>
          <li className="md:hidden">
            <span>
              <SearchSidebar />
            </span>
          </li>
        </ul>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}
