import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: "Sela Imager",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }} >
      <html lang="en">
        <body className={ cn("font-IBMPlex antialiased", IBMPlex.variable)} >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
