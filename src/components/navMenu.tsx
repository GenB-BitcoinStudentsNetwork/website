"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  name: string;
  sectionName: string;
  className?: string;
  mobile?: boolean;
  closeNav?: () => void;
  isNewPage?: boolean;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const NavMenu = ({
  name,
  sectionName,
  className,
  mobile,
  closeNav,
  isNewPage,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className="flex py-0 px-[0.5rem] items-center justify-center gap-[0.5rem]">
      <Link
        onClick={(e) => {
          if (pathname === "/") {
            !isNewPage && e.preventDefault();
            mobile && closeNav && closeNav();
            !isNewPage && scrollToSection(sectionName);
          }
        }}
        href={isNewPage ? `${sectionName}` : `/#${sectionName}`}
        className={`${
          className ? "" : "text-base font-normal"
        }leading-[1.5rem] text-black font-sans lg:hover:text-primary lg:hover:text-[1.01rem] ${className}`}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavMenu;
