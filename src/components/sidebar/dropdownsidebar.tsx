import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";

export function DropdownSidebar() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className="hover:hover:text-primary-onHover hover:cursor-pointer flex gap-2">
          <LayoutDashboard />
          داشبورد
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 text-right" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/dashboard" className="hover:text-primary-onHover">
              صفحه اصلی داشبورد
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/article/manage"
              className="hover:text-primary-onHover"
            >
              ساخت مقاله
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/article/all"
              className="hover:text-primary-onHover"
            >
              مقالات
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard/profile"
              className="hover:text-primary-onHover"
            >
              ادیت پروفایل
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
