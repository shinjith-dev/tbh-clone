"use client";
import Image from "next/image";
import { recoletta } from "@/lib/fonts";
import { touchponits } from "./data";
import bullet from "@/assets/icons/bullet.svg";
import { useState } from "react";
import arrow from "@/assets/images/what-we-do/cursive-arrow.png";

export default function TouchPoints() {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="relative flex flex-col gap-8 lg:flex-row">
      <div className="shrink-0 basis-[40%] border-border md:border-l md:pl-12">
        <h2
          className={`${recoletta.className} mb-8 text-center text-3xl md:max-w-[320px] md:text-start md:text-4xl`}
        >
          We support students, no matter what they’re dealing with.
        </h2>

        <ul className="space-y-6 md:-ml-12">
          {touchponits.map((t, index) => (
            <li
              key={t.title}
              className={`touchpoint cursor-pointer border-primary md:pl-14 ${index === active && "border-l-2"}`}
              onClick={() => setActive(index)}
            >
              <div className="mb-3 border-l border-border pl-6 md:mb-0 md:border-none md:pl-0">
                <div className="mb-2 flex gap-3">
                  <div className="touchpoint-icon relative h-10 w-10 shrink-0">
                    <Image
                      src={t.icon}
                      fill
                      className="object-contain"
                      alt={"icon"}
                    />
                  </div>
                  <h5 className="text-xl font-extrabold md:text-lg">
                    {t.title}
                  </h5>
                </div>

                <div
                  className={`font-medium text-subtle transition-all md:pl-12 ${active === index ? "block opacity-100" : "md:hidden md:opacity-0"}`}
                >
                  <p className="mb-3 text-lg leading-tight">{t.description}</p>
                  <p className="flex items-start gap-4 text-sm font-medium text-subtle">
                    <Image
                      width={8}
                      height={8}
                      alt="List bullet"
                      src={bullet}
                      className="pt-2"
                    />
                    {t.details}
                  </p>
                </div>
              </div>

              <div className="relative h-[90vw] w-full md:hidden">
                <Image
                  alt={t.title}
                  src={t.image}
                  fill
                  className="object-contain"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-full md:h-[90vw] lg:h-full">
        <Image
          src={touchponits[active].image}
          alt={touchponits[active].title}
        />
      </div>

      <div className="absolute right-20 top-[450px] hidden md:block lg:left-[35%] lg:right-auto lg:top-16">
        <div className="relative h-40 w-28 rotate-[80deg] lg:rotate-0">
          <Image src={arrow} alt="Cursive arrow" />
        </div>
      </div>
    </div>
  );
}
