import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page - Posts",
  description: "Posts - uses https://jsonplaceholder.typicode.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
