"use client";

// Import react/next components
import Link from "next/link";
// Import react/next hooks
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header>
      <div>
        <Link
          href="/"
          className={pathname == "/" ? "header-Link active" : "header-Link"}
        >
          Home
        </Link>
        <Link href="/authors" className="header-Link">
          Authors
        </Link>
        <Link href="/statistics" className="header-Link">
          Statistics
        </Link>
      </div>
    </header>
  );
}
