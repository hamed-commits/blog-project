import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Eye, Search } from "lucide-react";
import { defaultArticlePic } from "../image";

export default function SearchSidebar() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-1">
          <Search />
          جست و جو
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-xl dark:text-white border-1 dark:border-gray-800 dark:bg-[#050510]">
        <DialogHeader className="mt-3">
          <input
            type="text"
            className="p-3 outline-none dark:bg-[#03031c] mb-3 rounded-md focus:ring-2 focus:ring-indigo-700"
            placeholder="دنبال چی میگردی؟"
          />
          <h3 className="text-center">مقاله های پیدا شده</h3>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[20rem]">
          <div className="bg-slate-50 dark:bg-[#03031c] p-4 rounded-md flex flex-col gap-1">
            <div className="flex w-full flex-wrap dark:border-none border-1 p-3 border-gray-400 rounded-md">
              <div className="sm:w-2/5 w-full">
                <img className="rounded-md" src={defaultArticlePic} />
              </div>
              <div className="sm:w-3/5 p-2 w-full flex flex-col justify-center">
                <div>
                  <span>تایتل مقاله</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1 text-gray-400">
                    <Eye />
                    <span>123 بازدید</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
