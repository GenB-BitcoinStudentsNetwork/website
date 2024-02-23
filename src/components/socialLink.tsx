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
      <Image src={imagePath} height={35} width={35} alt={name} />
    </Link>
  );
};

export default SocialLink;
