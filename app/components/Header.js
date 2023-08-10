import Link from "next/link";

export default function Header() {
  const linkStyle =
    "block p-4 leading-8 lg:inline-block lg:mt-0 text-white text-xl font-semibold border-b-4 border-transparent hover:text-greenDeloitte hover:border-b-4 hover:border-greenDeloitte duration-300 mr-4";
  return (
    <header className="flex items-center justify-between flex-wrap bg-black">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="flex justify-center lg:flex-grow">
          <Link href="/" className={linkStyle}>
            Home
          </Link>
          <Link href="/authors" className={linkStyle}>
            Authors
          </Link>
          <Link href="/statistics" className={linkStyle}>
            Statistics
          </Link>
        </div>
      </div>
    </header>
  );
}
