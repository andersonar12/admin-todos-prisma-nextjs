import WidgetItem from "@/components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Dashboard Page",
  description: "Dashboard Page",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/api/auth/signin");

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
      <WidgetItem title="Usuario conectado desde Server Side">
        <div className="flex flex-col break-words ">
          <p>{session.user?.name}</p>
          <p> {session.user?.email} </p>
          <p> {session.user?.image}</p>
          <p> {session.user?.roles?.join(", ")}</p>
          {/* {JSON.stringify(session.user, null, 2)} */}
        </div>
      </WidgetItem>
    </div>
  );
}
