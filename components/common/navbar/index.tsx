import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import MobileMenu from "./MobileMenu";
import MenuLink from "./MenuLink";

export type Menu = {
  label: string;
  path: string;
  subMenus?: { label: string; path: string }[];
};

export const menus: Menu[] = [
  { label: "Basic Needs", path: "/" },
  { label: "K12", path: "/" },
  { label: "Higher Ed", path: "/" },
  {
    label: "Families",
    path: "/",
    subMenus: [
      { label: "Children", path: "/" },
      { label: "Parents", path: "/" },
    ],
  },
  { label: "Enterprise", path: "/" },
];

export default function Navbar() {
  return (
    <nav className="container relative z-[999] flex w-full max-w-screen-xl items-center justify-end px-5 py-6 pl-48 md:justify-between md:py-8 xl:pr-3">
      <div className="absolute left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-14 md:translate-x-0">
        <Link
          href={"/"}
          className="relative inline-block h-[89px] w-[125px] md:h-[107px] md:w-[150px]"
        >
          <Image src={logo} alt="logo" fill className="object-contain" />
        </Link>
      </div>

      <ul className="hidden gap-2 font-extrabold text-subtle md:flex">
        {menus.map((menu) => (
          <MenuLink key={menu.label} variant="desktop" menu={menu} />
        ))}
      </ul>

      <div className="hidden space-x-4 font-extrabold md:flex">
        <button className="rounded-lg bg-white px-8 py-3 xl:px-12 xl:py-4">
          Login
        </button>
        <button className="rounded-lg bg-primary px-8 py-3 xl:px-10 xl:py-4">
          Join now
        </button>
      </div>

      <MobileMenu />
    </nav>
  );
}
