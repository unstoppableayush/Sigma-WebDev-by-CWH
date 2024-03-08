import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Facebook - Connect With World",
  description: "Admin Page Facebook - connect with friends and world around you",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
