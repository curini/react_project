import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/app/_component/nav";
import Footer from "@/app/_component/footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Page de présentation...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Nav />
        </header>
        <div className="w-5/6 mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
