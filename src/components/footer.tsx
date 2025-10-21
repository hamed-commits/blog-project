import Link from "next/link";
import React from "react";
import {
  LinkdinSvg,
  XtweeterSvg,
  InstagramSvg,
  TelegramSvg,
} from "../data/svg";
import Container from "./container";
import { einamad } from "./image";

import { socialLinks, footerSections } from "@/data/data";

const finalSocialLinks = [
  { ...socialLinks[0], svg: LinkdinSvg },
  { ...socialLinks[1], svg: XtweeterSvg },
  { ...socialLinks[2], svg: InstagramSvg },
  { ...socialLinks[3], svg: TelegramSvg },
];

export default function Footer() {
  return (
    <footer className="border-t-gray-200 dark:border-indigo-800 border-t-1 py-5 mt-40">
      <Container>
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-12 sm:col-span-6 lg:col-span-3">
            <h1 className="text-2xl font-[900]">بلاگ تریپ</h1>
            <p>بخون، تکیه بده، و لذت ببر!</p>
            <div className="flex gap-1">
              {finalSocialLinks.map((item, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-primary p-1 rounded-md flex items-center justify-center dark:bg-indigo-600"
                >
                  <Link href={item.href} aria-label={`لینک به ${item.label}`}>
                    <svg
                      className="w-7 h-7 text-white"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d={item.svg}
                        fillRule={
                          item.label === "لینکدین" ? "evenodd" : undefined
                        }
                      ></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div
              key={index}
              className="col-span-12 sm:col-span-6 lg:col-span-3 text-center sm:text-right"
            >
              <h4>{section.title}</h4>
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex}>{link}</p>
              ))}
            </div>
          ))}

          <div className="col-span-12 sm:col-span-6 lg:col-span-3 text-center sm:text-right">
            <img className="h-40" src={einamad} alt="نماد اعتماد الکترونیکی" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
