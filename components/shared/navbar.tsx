"use client";

import Logo from "@/assets/icons/logo";
import Link from "next/link";
import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store/store";
import { Button } from "../ui/button";
import AvatarComp from "./avatar";
import { IconMenu3, IconSearch } from "@tabler/icons-react";

const Navbar = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );
  return (
    <div className="w-full px-2 flex flex-row justify-around items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        {isAuthenticated && (
          <Button className="bg-transparent h-9 w-9 py-0 px-0 text-primary hover:text-white cursor-pointer">
            <IconMenu3 />
          </Button>
        )}
        <Link href="/" className="outline-none ring-0">
          <Logo width={100} height={50} className="" />
        </Link>
      </div>
      {!isAuthenticated ? (
        <Button
          variant="default"
          className="bg-primary text-white cursor-pointer"
        >
          Login
        </Button>
      ) : (
        <div className="flex flex-row justify-center items-center gap-2">
          <Button className="bg-transparent h-9 w-9 py-0 px-0 text-primary hover:text-white cursor-pointer">
            <IconSearch />
          </Button>
          <div className="h-9 w-9 overflow-hidden  rounded-lg">
            <AvatarComp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
