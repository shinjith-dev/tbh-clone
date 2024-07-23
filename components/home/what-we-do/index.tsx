import { guthenBloots } from "@/lib/fonts";
import TouchPoints from "./TouchPoints";

export default function WhatWeDo() {
  return (
    <section className="clip-what-we-do -mt-52 bg-white pt-60">
      <div className="container w-full max-w-screen-xl pb-6 md:pt-20">
        <div className="mx-auto md:w-11/12 xl:px-6">
          <p
            className={`${guthenBloots.className} mb-4 text-center text-2xl text-[26px] md:mb-8 md:text-left lg:mb-16`}
          >
            One platform, multiple touchpoints.
          </p>

          <TouchPoints />
        </div>
      </div>
    </section>
  );
}
