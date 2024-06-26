"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      width={100}
      height={100}
      className="hidden md:block cursor-pointer object-cover"
      src="/images/logo.png"
    />
  );
};

export default Logo;
