import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

const AvatarComp = () => {
  return (
    <Avatar className="w-full h-full px-0 py-0 rounded-none">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComp;
