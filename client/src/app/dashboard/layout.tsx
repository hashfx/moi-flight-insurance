import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import type { Metadata } from "next";

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
      <body className="flex flex-row gap-2">
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
