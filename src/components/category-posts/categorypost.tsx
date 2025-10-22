import { articles } from "@/data/data";
import { ArrowLeft, Clock, Eye, MountainSnow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category from "../category";

export default function CategoryPost() {
  return (
    <section className="mb-10">
      <div>
        <h2 className="lg:text-4xl text-3xl font-medium">مقاله های ویژه🔥</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-3">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {articles?.slice(0, 4).map((article, index) => (
            <div className="rounded-xl overflow-hidden">
              <Image
                height={100}
                width={100}
                src={article.thumbnail}
                alt="example article image"
                className="w-full"
              />
              <div className="bg-gray-400 dark:bg-slate-700 h-full p-4 dark:text-gray-300 text-white">
                <div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-primary w-auto dark:bg-indigo-500 text-xs me-2 p-1 text-white rounded-md">
                      <MountainSnow />
                      <p>{article.category.title}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold drop-shadow-lg hidden sm:block truncate">
                      {article.title}
                    </h3>
                    <div className="flex gap-4 flex-wrap text-[13px] font-bold">
                      <div className="flex items-center gap-1">
                        <Eye className="size-5" />
                        <p>بازدید: {article.views}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="size-5" />
                        <p>{article.read_time} دقیقه مطالعه</p>
                      </div>
                    </div>
                    <div className="dark:bg-indigo-900 dark:text-white p-3 rounded-xl bg-gray-500">
                      <div className="flex justify-between">
                        <div className="flex gap-2 items-center">
                          <Image
                            height={100}
                            width={100}
                            src={article.author.image}
                            alt="example article image"
                            className="object-cover rounded-full h-6 w-6"
                          />
                          <div>
                            <h3>{article.author.full_name}</h3>
                          </div>
                        </div>
                        <Link
                          href={"/"}
                          className="bg-primary dark:bg-indigo-500 p-1 rounded-[5px]"
                        >
                          <ArrowLeft />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Category />
      </div>
    </section>
  );
}
