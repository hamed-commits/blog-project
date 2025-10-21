import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Eye, Heart, Trash } from "lucide-react";
import { defaultArticlePic } from "../image";

export default function Favorate() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-1 hover:text-red-500 hover:cursor-pointer">
          <Heart />
          علاقه مندی ها
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-xl dark:text-white border-1 dark:border-gray-800 dark:bg-[#050510]">
        <DialogHeader>
          <DialogTitle className="text-center">
            مقاله های مورد علاقه
          </DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[20rem]">
          <div className="bg-slate-50 dark:bg-[#03031c] p-4 rounded-md flex flex-col gap-1">
            <div className="flex w-full flex-wrap dark:border-none border-1 p-3 border-gray-400 rounded-md">
              <div className="sm:w-2/5 w-full">
                <img
                  className="rounded-md"
                  src={defaultArticlePic}
                  alt="تصویر مقاله"
                />
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
                  <div>
                    <div className="bg-red-400 p-1 w-fit rounded-sm">
                      <Trash className="text-red-800" />
                    </div>
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
