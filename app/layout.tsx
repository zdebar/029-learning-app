import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "../features/theme/theme-provider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Learning App",
  description: "Zdeněk Barth's Learning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className="max-w-container mx-auto min-h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
