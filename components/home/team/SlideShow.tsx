"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import members from "./data";
import boxes from "@/assets/images/team/boxes.png";

export default function SlideShow() {
  const [active, setActive] = useState<number>(0);
  const intervalRef = useRef<any | null>(null);

  useEffect(() => {
    if (intervalRef.current === null) {
      intervalRef.current = setInterval(() => {
        setActive((prev) => (prev < members.length - 1 ? prev + 1 : 0));
      }, 5000);
    }

    () => {
      if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full">
      {members.map((mpic, index) => (
        <div
          key={`${mpic.name}-${mpic.role}-image`}
          className={`absolute left-0 top-0 z-10 h-[calc(100%-40px)] w-full transition-all duration-500 ${active === index ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={mpic.image}
              alt={mpic.name}
              fill
              className="clip-team object-contain"
            />
          </div>

          {mpic.tags.map((t, tIndex) => (
            <div
              key={`${mpic.name}-${t.left}-${t.top}`}
              style={{ left: t.left, top: t.top }}
              className="absolute"
            >
              <div
                className="float relative h-10 w-20 md:h-16 md:w-32 xl:h-20 xl:w-40"
                style={{ animationDelay: `${tIndex * 0.5}s` }}
              >
                <Image
                  src={t.image}
                  alt="tag"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      {members.map((mname, index) => (
        <div
          key={`${mname.name}-${mname.role}-name`}
          className={`absolute bottom-4 right-4 z-10 flex flex-col items-end gap-3 md:bottom-10 md:right-8 ${active === index ? "opacity-100" : "opacity-0"}`}
        >
          <div className="relative h-6 w-6 lg:h-8 lg:w-8">
            <Image src={boxes} alt="boxes" fill />
          </div>
          <p className="space-x-2 font-medium md:text-lg">
            <span className="text-white">{mname.name},</span>
            <span className="text-fg">{mname.role}</span>
          </p>
        </div>
      ))}
    </div>
  );
}
