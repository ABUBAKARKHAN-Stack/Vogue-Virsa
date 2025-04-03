import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/utils/font";


export const metadata: Metadata = {
  title: "Vogue Virsa",
  description: "Discover premium luxury fragrances at Vogue Virsa. Elevate your senses with our exclusive collection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className}  antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
