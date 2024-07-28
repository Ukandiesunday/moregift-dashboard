import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/components/dashboard/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "moregift corporate dashboard",
  description: "Generated moregift corporate dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
