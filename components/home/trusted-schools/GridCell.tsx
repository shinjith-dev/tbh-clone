"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  schools: (StaticImport | string)[];
  hideOnMobile?: boolean;
  order: number;
};

export default function GridCell({
  schools,
  order,
  hideOnMobile = false,
}: Props) {
  const school1 = useRef<HTMLDivElement | null>(null);
  const school2 = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<any | null>(null);

  useEffect(() => {
    const repeatedSwap = () => {
      if (school1.current !== null && school2.current !== null) {
        const s1 = school1.current;
        const s2 = school2.current;

        if (s1.classList.contains("opacity-100")) {
          s1.classList.remove("opacity-100");
          s1.style.transitionDuration = "400ms";
          s1.classList.add("opacity-0");

          s2.classList.remove("opacity-0");
          s2.style.transitionDuration = "300ms";
          s2.style.transitionDelay = "400ms";
          s2.classList.add("opacity-100");
        } else {
          s2.classList.remove("opacity-100");
          s2.style.transitionDuration = "400ms";
          s2.classList.add("opacity-0");

          s1.classList.remove("opacity-0");
          s1.style.transitionDuration = "300ms";
          s1.style.transitionDelay = "400ms";
          s1.classList.add("opacity-100");
        }
      }

      intervalRef.current = setInterval(() => {
        if (school1.current !== null && school2.current !== null) {
          const s1 = school1.current;
          const s2 = school2.current;

          if (s1.classList.contains("opacity-100")) {
            s1.classList.remove("opacity-100");
            s1.style.transitionDuration = "400ms";
            s1.style.transitionDelay = "0ms";
            s1.classList.add("opacity-0");

            s2.classList.remove("opacity-0");
            s2.style.transitionDuration = "300ms";
            s2.style.transitionDelay = "400ms";
            s2.classList.add("opacity-100");
          } else {
            s2.classList.remove("opacity-100");
            s2.style.transitionDuration = "400ms";
            s2.style.transitionDelay = "0ms";
            s2.classList.add("opacity-0");

            s1.classList.remove("opacity-0");
            s1.style.transitionDuration = "300ms";
            s1.style.transitionDelay = "400ms";
            s1.classList.add("opacity-100");
          }
        }
      }, 10000);
    };

    if (intervalRef.current === null) {
      setTimeout(() => {
        repeatedSwap();
      }, 2000 * order);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div
      className={`relative h-20 w-20 md:h-24 md:w-24 lg:h-[120px] lg:w-[120px] ${hideOnMobile && "hidden md:block"}`}
    >
      <div className="absolute left-0 top-0 h-full w-full">
        <div
          ref={school1}
          className="relative h-20 w-20 opacity-100 transition-all md:h-24 md:w-24 lg:h-[120px] lg:w-[120px]"
        >
          <Image
            fill
            src={schools[0]}
            alt={`schools-${order}-1`}
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute left-0 top-0">
        <div
          ref={school2}
          className="relative h-20 w-20 opacity-0 transition-all md:h-24 md:w-24 lg:h-[120px] lg:w-[120px]"
        >
          <Image
            fill
            src={schools[1]}
            alt={`schools-${order}-2`}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
