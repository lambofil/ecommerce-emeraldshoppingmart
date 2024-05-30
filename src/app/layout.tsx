import Header from "@/components/Header";
import Footer from "@/components/Footer"; 
import type { Metadata } from "next";
import "./css/globals.css";
import Layout from "./../components/Layout";
import "slick-carousel/slick/slick.css";


export const metadata: Metadata = {
  title: {
    template: "shopping_mart",
    default: "Emerald Shopping Mart - A place for all!"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
