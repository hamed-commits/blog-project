"use client";
import Image from "next/image";
import React, { useState } from "react";
// فرض بر این است که defaultArticlePic تعریف شده است
import { defaultArticlePic } from "./image";

interface CategoryType {
  id: number;
  title: string;
  thumbnail: string;
  slug: string;
}

export default function Category() {
  const [categories] = useState<CategoryType[]>([
    {
      id: 1,
      title: "تجهیزات",
      thumbnail: defaultArticlePic,
      slug: "technology",
    },
    { id: 2, title: "کوهنوردی", thumbnail: defaultArticlePic, slug: "health" },
    {
      id: 3,
      title: "پیمایش",
      thumbnail: defaultArticlePic,
      slug: "lifestyle",
    },
    {
      id: 5,
      title: "غذا و تغذیه",
      thumbnail: defaultArticlePic,
      slug: "nutrition",
    },
    { id: 6, title: "جنگل", thumbnail: defaultArticlePic, slug: "fitness" },
    {
      id: 7,
      title: "قله",
      thumbnail: defaultArticlePic,
      slug: "business",
    },
    {
      id: 9,
      title: "آموزش",
      thumbnail: defaultArticlePic,
      slug: "entertainment",
    },
  ]);

  return (
    <div className="lg:mt-0 mt-6">
      <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        دسته بندی ها
      </h3>
      <div className="space-y-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-1.5 grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative h-20 rounded-lg overflow-hidden col-span-1"
          >
            <Image
              width={100}
              height={100}
              src={category.thumbnail}
              alt={category.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/40 dark:bg-indigo-500/40 flex items-center justify-center">
              <h3 className="text-sm font-semibold text-white text-center p-1">
                {category.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
