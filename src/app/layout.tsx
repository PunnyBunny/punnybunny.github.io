import type { Metadata } from "next";
import "./globals.css";
import AppBar from "./appbar";
import ContactsBar from "./contactsbar";
import { ThemeProvider } from "next-themes";
import { gideonRoman, merriweather } from "./fonts";

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
    <html
      lang="en"
      className={`${gideonRoman.variable} ${merriweather.variable}`}
    >
      <body className={`antialiased scroll-smooth flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AppBar />
          <div className="max-w-screen-xl mx-auto">{children}</div>
          <ContactsBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
