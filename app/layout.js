// Import own components
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./globals.css";

export const metadata = {
  title: "Home Page - Posts",
  description: "Posts - uses https://jsonplaceholder.typicode.com/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen ">
        <Header />
        <main className="flex flex-grow justify-center">
          <div className="w-[90%]">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
