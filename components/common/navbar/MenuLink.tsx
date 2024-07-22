"use client";
import { useState } from "react";
import { Menu } from ".";
import Link from "next/link";
import Image from "next/image";
import chevronRight from "@/assets/icons/chevron-right.svg";
import chevronDown from "@/assets/icons/chevron-down.svg";

type MenuLinkProps = {
  menu: Menu;
  variant?: "mobile" | "desktop";
};

export default function MenuLink({ menu, variant = "mobile" }: MenuLinkProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  if (variant === "mobile" && menu?.subMenus)
    return (
      <li onClick={() => setExpanded((prev) => !prev)}>
        <button
          className="flex w-full items-center justify-between border-b border-border py-3.5"
          aria-label={`Expand ${menu.label}`}
        >
          {menu.label}
          <Image alt="Right arrow" height={10} width={7} src={chevronRight} />
        </button>

        {expanded && (
          <ul>
            {menu.subMenus.map((sm) => (
              <li key={sm.label}>
                <Link
                  className="flex items-center justify-between border-b border-border py-3.5 pl-4"
                  href={sm.path}
                >
                  {sm.label}
                  <Image
                    alt="Right arrow"
                    height={10}
                    width={7}
                    src={chevronRight}
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );

  if (variant === "mobile")
    return (
      <li>
        <Link
          className="flex items-center justify-between border-b border-border py-3.5"
          href={menu.path}
        >
          {menu.label}
          <Image alt="Right arrow" height={10} width={7} src={chevronRight} />
        </Link>
      </li>
    );

  if (variant === "desktop" && menu?.subMenus)
    return (
      <li className="group">
        <div className="flex items-center gap-2 px-4 py-2 group-hover:text-fg">
          {menu.label}
          <Image height={6} width={8} src={chevronDown} alt="Arrow down" />
        </div>

        <ul className="group-hover:boing absolute left-96 top-20 hidden w-[220px] rounded-lg bg-white px-5 group-hover:block">
          {menu.subMenus.map((sm, index) => (
            <li key={sm.label}>
              <Link
                className={`flex items-center justify-between border-border py-3 hover:text-fg ${menu?.subMenus && index != menu.subMenus?.length - 1 ? "border-b" : ""}`}
                href={menu.path}
              >
                {sm.label}
                <Image
                  alt="Right arrow"
                  height={10}
                  width={7}
                  src={chevronRight}
                />
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );

  return (
    <Link href={menu.label} className="px-4 py-2 hover:text-fg">
      {menu.label}
    </Link>
  );
}
