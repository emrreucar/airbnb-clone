"use client";

import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full z-10 shadow-sm bg-white">
      <div className="py-4 border-b">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
