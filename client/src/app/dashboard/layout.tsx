import type { Metadata } from "next";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "MOI Dashboard",
  description: "Flight Delay Insurance app powered by MOI blockchain.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex w-screen">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
