"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function SidebarItem({
  title,
  icon,
  path,
}: {
  title: string;
  icon: React.ReactNode;
  path: string;
}) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r hover:from-sky-500 hover:to-cyan-300 hover:text-white ${
          pathname === path ? "text-white  from-sky-600 to-cyan-400 " : ""
        } `}
      >
        {icon}
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
}
