import { guthenBloots, recoletta } from "@/lib/fonts";
import Image from "next/image";
import arrowMobile from "@/assets/icons/stats-arrow-mob.png";
import arrow1 from "@/assets/icons/stats-arrow-1.png";
import arrow2 from "@/assets/icons/stats-arrow-2.png";

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col items-center gap-1 py-20 text-center md:flex-row md:items-start md:justify-between md:gap-8 md:py-28 md:text-start">
        <div className="">
          <p className="mb-2 text-lg font-extrabold text-subtle">Up to</p>
          <h1 className="text-6xl md:text-4xl lg:text-6xl xl:text-7xl">
            <span className={`${recoletta.className} mr-2`}>10</span>
            <span className={`${guthenBloots.className}`}>students</span>
          </h1>
        </div>

        <div className="relative h-32 w-16 md:h-24 md:w-32 md:-translate-y-12">
          <Image src={arrowMobile} className="md:hidden" alt="arrow" />
          <Image src={arrow1} className="hidden md:block" alt="arrow" />
        </div>

        <div className="">
          <p className="mb-2 text-lg font-extrabold text-subtle">Meet</p>
          <h1 className="text-6xl md:text-4xl lg:text-6xl xl:text-7xl">
            <span className={`${recoletta.className} mr-2`}>Once</span>
            <span className={`${guthenBloots.className}`}>/week</span>
          </h1>
        </div>

        <div className="relative h-32 w-16 md:h-24 md:w-32 md:-translate-y-12">
          <Image src={arrowMobile} className="md:hidden" alt="arrow" />
          <Image src={arrow2} className="hidden md:block" alt="arrow" />
        </div>

        <div className="">
          <p className="mb-2 text-lg font-extrabold text-subtle">For</p>
          <h1 className="text-6xl md:text-4xl lg:text-6xl xl:text-7xl">
            <span className={`${recoletta.className} mr-2`}>60</span>
            <span className={`${guthenBloots.className}`}>min</span>
          </h1>
        </div>
      </div>
    </section>
  );
}
