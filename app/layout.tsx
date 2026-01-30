import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Academy",
  description: "UX/UI Design Course",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn">
      {/* className-аас фонтын хувьсагчийг авч хаяна */}
      <body className="antialiased font-rounded">
        {children}
      </body>
    </html>
  );
}