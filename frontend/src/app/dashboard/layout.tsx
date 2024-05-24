'use client';
import TicketNew from "@/components/Dashboard/TicketNew";
import Loading from "@/components/Dashboard/components/Loading";
import { data } from "@/components/Dashboard/data";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { wallet } = useAuth();
  const router = useRouter();
    useEffect(() => {
    if (!wallet) {
      const timeout = setTimeout(() => {
        router.push("/");
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [router, wallet]);
  return wallet ? (
    <div className="flex flex-col gap-4 pt-16">
      <div className="text-3xl font-light mt-5">Insurance Details</div>
      <div className="flex gap-20 h-full">
        <TicketNew {...data[1]} />
        {children}
      </div>
    </div>
  ): (
    <div className="flex justify-between items-center pt-10">
      <Loading />
    <div className="flex items-center justify-center h-screen space-y-4 flex-col">
      <div className="text-3xl font-light">We are verifying your credentials.....</div>
    </div>
    </div>
  );
}
