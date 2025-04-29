import type { Metadata } from "next";
import { Gideon_Roman } from "next/font/google";
import "./globals.css";
import AppBar from "./appbar";
import ContactsBar from "./contactsbar";
import { ThemeProvider } from "next-themes";

const gideonRoman = Gideon_Roman({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "sunny cheung",
  description: "my personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gideonRoman.className} antialiased scroll-smooth flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppBar />
          <div className=" max-w-screen-xl mx-auto">{children}</div>
          <ContactsBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
