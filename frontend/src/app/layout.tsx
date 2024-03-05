import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import AuthProvider from "@/context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finsure",
  description:
    "A Decentralized flight insurance platform build on moi blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0D1117] h-screen w-full ">
        <AuthProvider>
          {" "}
          <div className="px-10 py-5">
            <Navbar />
            {children}
          </div>
          <Image
            src={"/concentricellipses.svg"}
            className="w-1/2 h-1/2 absolute bottom-0 -left-40 -z-10"
            alt=""
            width={100}
            height={100}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
