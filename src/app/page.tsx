"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { TodoListDemo } from "@/components/ui/todo-list-demo";

export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <div className="flex flex-col justify-center items-center h-screen gap-8">
        <span className="text-5xl font-bold">📋 Todo List</span>
        <TodoListDemo />
      </div>
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Todo list</HoveredLink>
            <HoveredLink href="/contact">Contact</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


