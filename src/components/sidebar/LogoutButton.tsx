"use client";

import { useSession, signOut, signIn } from "next-auth/react";
import { CiLogout } from "react-icons/ci";
import { IoEnter, IoShieldOutline } from "react-icons/io5";

export default function LogoutButton() {
  const display = {
    authenticated: { icon: <CiLogout />, text: "Logout", onClick: () => signOut() },
    unauthenticated: { icon: <IoEnter />, text: "Login", onClick: () => signIn() },
    loading: { icon: <IoShieldOutline />, text: "Waiting...", onClick: () => {} },
  };

  const { data: session, status } = useSession();
  console.log(session, status);

  //   if (status === "loading")
  //     return (
  //       <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
  //         <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
  //           <IoShieldOutline />
  //           <span className="group-hover:text-gray-700">Waiting...</span>
  //         </button>
  //       </div>
  //     );

  //   if (status === "unauthenticated")
  //     return (
  //       <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
  //         <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
  //           <IoEnter />
  //           <span className="group-hover:text-gray-700">Ingresar</span>
  //         </button>
  //       </div>
  //     );

  return (
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        onClick={display[status].onClick}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        {display[status].icon}
        <span className="group-hover:text-gray-700">{display[status].text}</span>
      </button>
    </div>
  );
}
