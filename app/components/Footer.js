import Link from "next/link";

export default function Footer() {
  const linkStyle =
    "block p-4 leading-8 lg:inline-block lg:mt-0 text-white text-xl font-semibold border-b-4 border-transparent hover:text-greenDeloitte hover:border-b-4 hover:border-greenDeloitte duration-300 mr-4";
  return (
    <footer className="flex items-center justify-center flex-wrap bg-white p-4 border-t-2 border-gray-100">
      <p>Data</p>
    </footer>
  );
}
