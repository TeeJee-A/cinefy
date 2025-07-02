"use client";

import { useAppSelector } from "@/app/store/hooks";
import { RootState } from "@/app/store/store";
import Logo from "@/assets/icons/logo";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import { Button } from "../ui/button";
import AvatarComp from "./avatar";
import Sidebar from "./sidebar";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isAuthenticated = useAppSelector(
    (state: RootState) => state.userInfo.isAuthenticated
  );
  const router = useRouter();

  return (
    <div className="w-full px-3 flex flex-row md:justify-around justify-between items-center">
      <div className="flex flex-row justify-center items-center md:gap-2 gap-1">
        {!isAuthenticated && <Sidebar />}
        <Link href="/" className="outline-none ring-0">
          <Logo width={100} height={50} className="" />
        </Link>
      </div>
      {!isAuthenticated ? (
        <Button
          onClick={() => router.push("/login")}
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
