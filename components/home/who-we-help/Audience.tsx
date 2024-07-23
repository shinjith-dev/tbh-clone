"use client";
import { recoletta } from "@/lib/fonts";
import { audience } from "./data";
import Image from "next/image";
import plus from "@/assets/icons/circle-plus.svg";
import { useState } from "react";
import Link from "next/link";
import arrow from "@/assets/icons/chevron-right-primary.svg";

export default function Audience() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="items-end pt-8 lg:flex">
      <ul className="shrink-0 basis-[40%] space-y-4 pb-8 md:mx-4 lg:px-8 xl:px-12">
        {audience.map((a, index) => (
          <li
            key={a.title}
            onClick={() => setActive(index)}
            className={`cursor-pointer rounded-xl border-fg px-7 py-5 ${index === active ? "bg-white" : "border bg-transparent"}`}
          >
            <div className="mb-2 flex justify-between">
              <h5
                className={`${recoletta.className} text-xl md:text-3xl xl:text-4xl`}
              >
                {a.title}
              </h5>
              {index !== active && (
                <Image src={plus} alt="Plus" height={35} width={35} />
              )}
            </div>

            {index === active && (
              <>
                <p className="mb-1 font-medium text-subtle">{a.description}</p>
                <Link
                  className="flex items-center gap-2 font-extrabold text-primary"
                  href={"/"}
                >
                  Learn more{" "}
                  <Image src={arrow} height={13} width={8} alt="arrow" />
                </Link>
              </>
            )}
          </li>
        ))}
      </ul>

      <div className="relative hidden w-[60%] basis-[60%] lg:block lg:h-[570px] xl:h-[770px]">
        <Image
          src={audience[active].image}
          alt="Audience"
          fill
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
}
