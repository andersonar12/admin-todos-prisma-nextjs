import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout, CiUser } from "react-icons/ci";
import SidebarItem from "./SidebarItem";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./LogoutButton";

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <IoCalendarOutline size={30} />,
  },
  {
    title: "Todos",
    href: "/dashboard/res-todos",
    icon: <CiBookmarkCheck size={30} />,
  },
  {
    title: "Server Actions",
    href: "/dashboard/server-todos",
    icon: <IoListOutline size={30} />,
  },
  {
    title: "Cookies",
    href: "/dashboard/cookies",
    icon: <IoCodeWorkingOutline size={30} />,
  },
  {
    title: "Products",
    href: "/dashboard/products",
    icon: <IoBasketOutline size={30} />,
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <IoPersonOutline size={30} />,
  },
];

export default async function Sidebar() {
  const session = await getServerSession(authOptions);

  return (
    <aside
      className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]"
      style={{ minWidth: "250px" }}
    >
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            {/* Next/Image */}
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              alt="tailus logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src={
              session?.user?.image! ??
              "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
            }
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            width={150}
            height={150}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {session?.user?.name}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            {session?.user?.roles?.join(", ")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {navItems.map((item) => (
            <SidebarItem key={item.title} title={item.title} icon={item.icon} path={item.href} />
          ))}
        </ul>
      </div>

      <LogoutButton />
    </aside>
  );
}
