import React from "react";
import { defaultArticlePic, defaultAvatar } from "./image";
import { MountainSnow } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FirstPosts() {
  return (
    <section className="grid grid-cols-12 gap-3 mb-10 text-white">
      <div className="col-span-12 md:col-span-6">
        <div className="relative aspect-video h-full">
          <img
            className="w-full h-full object-cover rounded-2xl absolute"
            src={defaultArticlePic}
            alt="تصویر مقاله بزرگ"
          />
          <div className="absolute bg-gray-400 dark:bg-slate-700 w-full bottom-0 backdrop-blur-md rounded-xl p-3">
            <div className="inline-flex items-center gap-2 bg-primary w-auto dark:bg-indigo-500 text-xs me-2 p-1 text-white rounded-md">
              <MountainSnow />
              <p>ماجراجویی</p>
            </div>
            <h3 className="text-3xl font-bold drop-shadow-lg hidden sm:block">
              تایتل مقاله
            </h3>
            <div className="flex items-center gap-4 font-semibold">
              <img
                className="h-8 w-8 rounded-full"
                src={defaultAvatar}
                alt="آواتار نویسنده"
              />
              <p>10 مهر 1403</p>
              <p>.</p>
              <p>زمان مطالعه: 3 دقیقه</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
          <div className="rounded-2xl dark:border-none overflow-hidden h-fit sm:col-span-1 col-span-2">
            <Link href="/">
              <div className="relative w-full rounded-xl">
                <Image
                  width={400}
                  alt="عکس مقاله"
                  height={200}
                  src={defaultArticlePic}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-primary dark:from-indigo-500 to-transparent"></div>
                <div className="text-white p-3 space-y-3 absolute bottom-0">
                  <div className="inline-flex items-center gap-2 bg-amber-600 w-auto dark:bg-indigo-500 text-xs me-2 p-1 rounded-md">
                    <MountainSnow />
                    <p>کوهنوردی</p>
                  </div>
                  <h3 className="text-xl font-bold drop-shadow-lg hidden sm:block">
                    تایتل مقاله
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={defaultAvatar}
                      alt="آواتار"
                    />
                    <p>10 مهر 1403</p>
                    <p>3 دقیقه</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-2xl dark:border-none overflow-hidden h-fit sm:col-span-1 col-span-2">
            <Link href="/">
              <div className="relative w-full rounded-xl">
                <Image
                  width={400}
                  alt="عکس مقاله"
                  height={200}
                  src={defaultArticlePic}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-primary dark:from-indigo-500 to-transparent"></div>
                <div className="text-white p-3 space-y-3 absolute bottom-0">
                  <div className="inline-flex items-center gap-2 bg-amber-600 w-auto dark:bg-indigo-500 text-xs me-2 p-1 rounded-md">
                    <MountainSnow />
                    <p>کوهنوردی</p>
                  </div>
                  <h3 className="text-xl font-bold drop-shadow-lg hidden sm:block">
                    تایتل مقاله
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={defaultAvatar}
                      alt="آواتار"
                    />
                    <p>10 مهر 1403</p>
                    <p>3 دقیقه</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-2xl dark:border-none overflow-hidden h-fit sm:col-span-1 col-span-2">
            <Link href="/">
              <div className="relative w-full rounded-xl">
                <Image
                  width={400}
                  alt="عکس مقاله"
                  height={200}
                  src={defaultArticlePic}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-primary dark:from-indigo-500 to-transparent"></div>
                <div className="text-white p-3 space-y-3 absolute bottom-0">
                  <div className="inline-flex items-center gap-2 bg-amber-600 w-auto dark:bg-indigo-500 text-xs me-2 p-1 rounded-md">
                    <MountainSnow />
                    <p>کوهنوردی</p>
                  </div>
                  <h3 className="text-xl font-bold drop-shadow-lg hidden sm:block">
                    تایتل مقاله
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={defaultAvatar}
                      alt="آواتار"
                    />
                    <p>10 مهر 1403</p>
                    <p>3 دقیقه</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="rounded-2xl dark:border-none overflow-hidden h-fit sm:col-span-1 col-span-2">
            <Link href="/">
              <div className="relative w-full rounded-xl">
                <Image
                  width={400}
                  alt="عکس مقاله"
                  height={200}
                  src={defaultArticlePic}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-[10rem] bg-gradient-to-t from-primary dark:from-indigo-500 to-transparent"></div>
                <div className="text-white p-3 space-y-3 absolute bottom-0">
                  <div className="inline-flex items-center gap-2 bg-amber-600 w-auto dark:bg-indigo-500 text-xs me-2 p-1 rounded-md">
                    <MountainSnow />
                    <p>کوهنوردی</p>
                  </div>
                  <h3 className="text-xl font-bold drop-shadow-lg hidden sm:block">
                    تایتل مقاله
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={defaultAvatar}
                      alt="آواتار"
                    />
                    <p>10 مهر 1403</p>
                    <p>3 دقیقه</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
