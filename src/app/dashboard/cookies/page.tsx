import { cookies } from "next/headers";
import TabBar from "@/components/TabBar";
export const metadata = {
  title: "Cookies Page",
  description: "Para aprender sobre las cookies",
};
export default function PageCookies() {
  const cookie = Number(cookies().get("selectedTab")?.value) || 1;

  // const cookieAll = cookies().getAll();

  // console.log(cookieAll);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl"> Tabs</span>
        <TabBar currentTab={cookie} />
      </div>
    </div>
  );
}
