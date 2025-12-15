import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karthikeya Ravirala | Portfolio",
  description: "AI Engineering Student showcasing projects and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}