import { Clock, Eye, MountainSnow, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Category {
  title: string;
  thumbnail: string;
  slug: string;
}

interface Author {
  full_name: string;
  image: string;
}

export interface Article {
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  read_time: number;
  category: Category;
  author: Author;
}

export default function Card({ article }: { article: Article }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <Image
        height={300}
        width={500}
        src={article.thumbnail}
        alt="example article image"
        className="w-full object-cover aspect-video"
      />
      <div className="bg-gray-400 dark:bg-slate-700 h-full p-4 dark:text-gray-300 text-white">
        <div>
          <div>
            <div className="inline-flex items-center gap-2 bg-primary w-auto dark:bg-indigo-500 text-xs me-2 p-1 text-white rounded-md">
              <MountainSnow className="size-4" />
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
                <p>بازدید: {article.views.toLocaleString("fa-IR")}</p>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-5" />
                <p>{article.read_time.toLocaleString("fa-IR")} دقیقه مطالعه</p>
              </div>
            </div>
            <div className="dark:bg-indigo-900 dark:text-white p-3 rounded-xl bg-gray-500">
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Image
                    height={24}
                    width={24}
                    src={article.author.image}
                    alt="example article image"
                    className="object-cover rounded-full h-6 w-6"
                  />
                  <div>
                    <h3>{article.author.full_name}</h3>
                  </div>
                </div>
                <Link
                  href={`/articles/${article.slug}`}
                  className="bg-primary dark:bg-indigo-500 p-1 rounded-[5px]"
                >
                  <ArrowLeft className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
