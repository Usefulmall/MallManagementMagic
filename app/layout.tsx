import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "UsefulMall — Where Shopping Centre Managers Learn the Real Job",
  description: "A curated professional resource centre that helps shopping centre managers learn, understand and improve the real work of managing a shopping centre.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-50/50 text-gray-800 antialiased font-sans">
        <NavBar />
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
