"use client";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href={"/#home"}>
      <span className="text-xl font-bold tracking-wide">Blue Onion</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-300">
        <Link href="/#skills" className="hover:text-white transition">Skills</Link>
        <Link href="/#project" className="hover:text-white transition">Project</Link>
        <Link href="/#contact" className="hover:text-white transition">Contact</Link>
      </div>

      {/* Mobile Menu with shadcn Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open Menu">
              <Menu size={26} className="text-white" />
            </button>
          </SheetTrigger>

          <SheetContent 
            side="right" 
            className="w-64 bg-black/90 text-gray-300 backdrop-blur-md"
          >
            <SheetTitle>
              <VisuallyHidden>Menu</VisuallyHidden>
            </SheetTitle>

            <div className="flex flex-col gap-6 p-6">
              <SheetClose asChild>
                <Link href="/#skills" className="hover:text-white transition">Skills</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#project" className="hover:text-white transition">Project</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/#contact" className="hover:text-white transition">Contact</Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
