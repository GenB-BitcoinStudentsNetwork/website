"use client";

import Link from "next/link";
import Image from "next/image";

interface Props {
  link: string;
  imagePath: string;
  name: string;
}
const SocialLink = ({ link, imagePath, name }: Props) => {
  return (
    <Link href={link} target="_blank">
      <Image
        src={imagePath}
        sizes={"100vw"}
        height={0}
        width={0}
        className={`w-[1.44544rem] h-[1.44544rem] lg:w-[2.1875rem] lg:h-[2.1875rem]`}
        alt={name}
      />
    </Link>
  );
};

export default SocialLink;
