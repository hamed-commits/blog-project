import { articles, categories } from "@/data/data";
import { ArrowLeft, Clock, Eye, MountainSnow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Category from "../category";
import Card from "./card";

export default function CategoryPost() {
  return (
    <section className="mb-10">
      <div>
        <h2 className="lg:text-4xl text-3xl font-medium">مقاله های ویژه🔥</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-3">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3">
          {articles?.slice(0, 4).map((article, index) => (
            <Card key={article.slug} article={article} />
          ))}
        </div>
        <div>
          <Category />
          <div>
            <div>
              <h3>اخرین پست ها</h3>
            </div>
            {articles.slice(0, 2).map((article, index) => (
              <div>
                <Image
                  alt={article.title}
                  width={100}
                  height={100}
                  src={article.thumbnail}
                  className="h-20 w-20 object-cover rounded-md"
                />
                <div>
                  <h3>{article.title}</h3>
                  <div>
                    <p>{article.author.full_name}</p>
                    <p>{article.read_time} دقیقه مطالعه</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
