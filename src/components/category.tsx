"use client";
import Image from "next/image";
import React from "react";
import { categories } from "@/data/data";

export default function Category() {
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
