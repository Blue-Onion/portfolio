import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-4 my-3 backdrop:backdrop-blur-3xl lg:mb-0 ">
      <div className="flex justify-between">
        <div className="span">Blue Onion</div>
        <div className="flex gap-3">
          <div className="">
            <Link href={"/#skills"} >
            Skills
            </Link>
            </div>
          <div className="">Project</div>
          <div className="">Contact</div>
        </div>
      </div>
    </nav>
  );
}
