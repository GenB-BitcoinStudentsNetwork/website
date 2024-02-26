import Link from "next/link";

interface Props {
  name: string;
  sectionName: string;
  className?: string;
}

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};

const NavMenu = ({ name, sectionName, className }: Props) => {
  return (
    <div
      className="flex py-0 px-[0.5rem] items-center justify-center gap-[0.5rem]"
      onClick={() => scrollToSection(sectionName)}
    >
      <Link
        href={`#${sectionName}`}
        className={`font-normal text-base leading-[1.5rem] text-black font-sans hover:text-primary hover:text-[1.01rem] ${className}`}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavMenu;
