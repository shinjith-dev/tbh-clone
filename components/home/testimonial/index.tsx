import { guthenBloots, recoletta } from "@/lib/fonts";
import Student from "./Student";
import Image from "next/image";
import stanford from "@/assets/images/stanford.svg";

export default function Testimonial() {
  return (
    <section className="bg-white">
      <div className="container flex max-w-screen-xl flex-col gap-8 border-t py-20 md:gap-12 lg:flex-row-reverse lg:gap-20">
        <div className="grow lg:pt-8">
          <p
            className={`${guthenBloots.className} mb-6 text-2xl text-[26px] lg:mb-8`}
          >
            Hear what our students have to say
          </p>

          <h3
            className={`${recoletta.className} border-l border-border pl-8 text-2xl md:max-w-[480px] lg:mb-20 lg:pl-12 lg:text-3xl xl:text-4xl`}
          >
            It was so nice to get to know my teammates and talk about what we’re
            all going through. tbh really helped me deal with my anxiety and
            pressure to please other people. Also, the sessions were so real. No
            BS.
          </h3>

          <div className="hidden items-end justify-between lg:flex">
            <Image
              src={stanford}
              alt={"Stanford"}
              width={120}
              height={26}
              className="object-contain pb-2"
            />
            <div className="shrink-0">
              <p className="text-lg font-bold text-primary">Jeanne K.</p>
              <p className="font-medium">Student at Stanford</p>
            </div>
          </div>
        </div>

        <div className="flex max-w-[500px] shrink-0 basis-1/2 items-end gap-8 lg:block lg:h-[60vw] lg:max-h-[760px] lg:max-w-[580px]">
          <Student />

          <div className="shrink-0 lg:hidden">
            <p className="text-lg font-bold text-primary">Jeanne K.</p>
            <p className="font-medium">
              Student at
              <br />
              Stanford
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
