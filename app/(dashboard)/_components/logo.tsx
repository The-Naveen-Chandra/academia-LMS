import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center">
        <Image height={30} width={30} alt="Logo" src={"/logo.svg"} />
        <div className="text-xl font-semibold ml-1">Academia</div>
      </div>
    </Link>
  );
};
