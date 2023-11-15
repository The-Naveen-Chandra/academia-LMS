import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center">
        <Image height={40} width={40} alt="Logo" src={"/logo.svg"} />
        <div className="text-lg font-semibold italic ml-2">Academia</div>
      </div>
    </Link>
  );
};
