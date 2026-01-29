import type { Metadata } from "next";
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from "next/font/google"; // 1. Импорт нэмэх
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Шинэ фонтын тохиргоо (Бүх жинг орууллаа)
const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-rounded", // CSS дээр дуудах нэр
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"], 
});

export const metadata: Metadata = {
  title: "Design Academy", // Title-ийг төслийн нэрээр солих нь зүйтэй
  description: "UX/UI Design Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // 3. mPlusRounded.variable -ийг body class-д нэмэх
        className={`${geistSans.variable} ${geistMono.variable} ${mPlusRounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}