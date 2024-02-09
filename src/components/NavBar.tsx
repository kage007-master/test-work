import React from "react";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <div className="w-1/2 text-4xl font-bold">
        <Link href="/">V</Link>
      </div>
      <div className="flex w-1/2 items-center justify-between text-xl">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/content">Content</Link>
      </div>
    </div>
  );
}
