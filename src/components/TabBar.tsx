"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  tabBarItems?: number[];
  currentTab?: number;
}

export default function TabBar({ tabBarItems = [1, 2, 3, 4], currentTab = 1 }: Props) {
  const router = useRouter();
  const [selected, setSelected] = useState(currentTab);

  const handleTabClick = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString());
    router.refresh();
  };

  return (
    <div className={`grid w-full gap-2 rounded-xl bg-gray-200 p-2 mt-3 ${"grid-cols-4"} `}>
      {tabBarItems.map((item) => (
        <div key={item}>
          <input
            type="radio"
            id={item.toString()}
            checked={item === selected}
            onChange={() => {}}
            className="peer hidden"
          />
          <label
            onClick={() => handleTabClick(item)}
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
