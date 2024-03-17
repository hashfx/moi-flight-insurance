import TicketNew from "@/components/Dashboard/TicketNew";
import { data } from "@/components/Dashboard/data";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
              <div className="flex flex-col gap-4 pt-16">
                <div className="text-3xl font-light mt-5">Insurance Details</div>
      <div className="flex gap-20 h-full">
              <TicketNew {...data[0]} />
              {children}
              </div>
              </div>
  );
}
