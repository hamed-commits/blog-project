import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components/index";
import { ThemeProvider } from "next-themes";
const vazir = Vazirmatn({
  variable: "--font-lalezar",
  subsets: ["arabic"],
});
export const metadata: Metadata = {
  title: "travel Blog",
  description: "Read, Write, enjoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`antialiased ${vazir.className} dark:from-[#0A043C]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-[1440px] mx-auto">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
