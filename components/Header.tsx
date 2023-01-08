import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center p-2 justify-between">
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image src="/favicon.ico" alt="Vercel Logo" width={35} height={60} />
        </Link>
        <div className="hidden md:inline-flex
        items-center space-x-5">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3 className="text-white bg-blue-600 px-5 py-1 rounded-lg">Follow</h3>
        </div>
      </div>
      <div className="flex items-center space-x-4 text-gray-500">
        <h3>Sign In</h3>
        <h3 className="border-2 border-blue-600 px-5 py-1 rounded-lg text-blue-600">Write</h3>
      </div>
    </header>
  );
}

export default Header;