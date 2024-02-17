import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOI Flight Delay Insurance",
  description: "Flight Delay Insurance app powered by MOI blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F3F7FC] h-screen mx-auto flex w-screen gap-5">
        {children}
      </body>
    </html>
  );
}
