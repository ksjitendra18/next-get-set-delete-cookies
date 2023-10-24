import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="my-5 max-w-7xl mx-auto px-3 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold">
        Exploring Cookies
      </Link>

      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link href="/">Server</Link>
          </li>
          <li>
            {" "}
            <Link href="/client">Client</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
