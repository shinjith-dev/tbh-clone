"use client";
import menuBtn from "@/assets/icons/menu.svg";
import closeBtn from "@/assets/icons/close.svg";
import chevronRight from "@/assets/icons/chevron-right.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { menus } from ".";
import Link from "next/link";
import MenuLink from "./MenuLink";

export default function MobileMenu() {
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    const preventScroll = () => {
      window.scrollTo(0, 0);
    };
    if (menu) window.addEventListener("scroll", preventScroll);
    else window.removeEventListener("scroll", preventScroll);

    return () => window.removeEventListener("scroll", preventScroll);
  }, [menu]);

  return (
    <>
      <button
        onClick={() => setMenu(true)}
        aria-label="Open menu"
        className="md:hidden"
      >
        <Image src={menuBtn} alt="Menu" width={53} height={53} />
      </button>

      {menu && (
        <div className="fixed left-0 top-0 h-screen w-screen bg-white md:hidden">
          <button
            onClick={() => setMenu(false)}
            aria-label="Close menu"
            className="absolute right-0 top-0 p-10"
          >
            <Image src={closeBtn} alt="Close" width={16} height={16} />
          </button>

          <ul className="p-6 pt-24 text-2xl font-bold">
            {menus.map((menu) => (
              <MenuLink menu={menu} key={menu.label} />
            ))}

            <li className="mb-1 mt-6">
              <Link
                href={"/"}
                className="flex items-center gap-3 text-xl underline"
              >
                Sign in
                <Image
                  alt="Right arrow"
                  height={10}
                  width={7}
                  src={chevronRight}
                />
              </Link>
            </li>
            <li className="pb-8">
              <Link
                href={"/"}
                className="flex items-center gap-3 text-xl underline"
              >
                Support
                <Image
                  alt="Right arrow"
                  height={10}
                  width={7}
                  src={chevronRight}
                />
              </Link>
            </li>
            <li>
              <Link
                className="inline-block scale-100 rounded-lg bg-primary px-[30px] py-[12px] text-base font-extrabold transition-all hover:scale-105"
                href="/"
              >
                Join now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
