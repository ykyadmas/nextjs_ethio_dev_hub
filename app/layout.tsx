import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/lib/AuthProviders";
import { ThemeProvider } from "@/context/ThemeProvider";
import React from "react";
import Navbar from "@/components/Navbar";
import LeftSideBar from "@/components/LeftSideBar";
import RightsideBar from "@/components/RightsideBar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" relative">
        <AuthProviders>
       <ThemeProvider>
        <Navbar/>
        <div className="flex">
        
          <LeftSideBar/>
        
          
          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
     {children}
     </div>
     </section>
     <RightsideBar/>
        </div>
      {/* <Toaster/> */}
       </ThemeProvider>
        </AuthProviders>
    </main>
  );
}

