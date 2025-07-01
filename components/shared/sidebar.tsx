import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconMenu3 } from "@tabler/icons-react";
import AvatarComp from "./avatar";
import Link from "next/link";
import { menuItems } from "@/types/sidebar";
import { useState } from "react";

const Sidebar = () => {
  const [ind, setInd] = useState<number>();
  return (
    <Sheet>
      <SheetTrigger className="bg-transparent h-9 w-9 overflow-hidden flex justify-center items-center text-primary rounded-lg hover:text-white  hover:bg-primary transition-all druation-500 cursor-pointer">
        <IconMenu3 className="h-9 w-9 p-2 hover:rotate-90 transition-all druation-500  " />
      </SheetTrigger>
      <SheetContent side="left" className="bg-primary rounded-r-2xl border-0">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>
        <div className="w-full flex flex-col items-start justify-start px-5 py-10 gap-5">
          {menuItems.map((item, index) => (
            <SheetClose asChild key={index}>
              <Link
                href={item.path}
                onMouseEnter={() => setInd(index)}
                onMouseLeave={() => setInd(-1)}
                className="font-montserrat font-bold text-2xl flex flex-col  h-10 overflow-hidden text-white"
              >
                <span
                  className={`h-10 min-h-10 flex justify-center items-center ${
                    ind === index ? "translate-y-[-100%]" : "translate-y-0"
                  } transition-transform duration-500`}
                >
                  {item.name}
                </span>
                <span
                  className={`h-10 min-h-10 flex justify-center items-center gap-1 ${
                    ind === index ? "translate-y-[-100%]" : "translate-y-0"
                  } transition-transform duration-500`}
                >
                  {item.name}
                </span>
              </Link>
            </SheetClose>
          ))}
        </div>
        <SheetFooter>
          <div className="flex flex-row gap-2">
            <div className="w-12 h-12 flex justify-center rounded-lg items-center overflow-hidden">
              <AvatarComp />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-white font-roboto">Ayoub Taji</span>
              <span className="text-white/50 font-light font-roboto">
                tajiayoub35@gmail.com
              </span>
            </div>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
