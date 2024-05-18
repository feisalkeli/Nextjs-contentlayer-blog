import Link from "next/link";
import React from "react";
import Image from "next/image";
import profilPicture from "../../../public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image
          src={profilPicture}
          alt="profilepicture"
          className="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl">Feisal Keli</span>
    </Link>
  );
};

export default Logo;
