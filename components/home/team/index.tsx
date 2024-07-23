import { guthenBloots, recoletta } from "@/lib/fonts";
import SlideShow from "./SlideShow";

export default function Team() {
  return (
    <section className="bg-white pb-60 pt-40">
      <div className="container flex max-w-screen-xl flex-col justify-between gap-20 lg:flex-row">
        <div className="pt-12 md:pl-20">
          <h5 className={`${guthenBloots.className} mb-12 text-2xl`}>
            Meet our world-class care experts
          </h5>

          <div className="border-l border-border pl-8">
            <h3 className={`${recoletta.className} mb-8 text-3xl font-bold`}>
              A proprietary program, built by expert therapists who understand
              students.
            </h3>

            <p className="text-subtle">
              All tbh groups are facilitated by licensed, culturally-competent
              therapists who have experience working with youth, adolescents,
              and college-aged students. Our proprietary program, rooted in the
              latest evidence-based therapeutic practices, provides students
              with a safe space to deal with life’s challenges.
            </p>
          </div>
        </div>

        <div className="relative h-[min(90vw,500px)] w-full shrink-0 bg-gradient-to-b from-[#ffc102] to-[#ffc102] lg:h-[min(45vw,630px)] lg:w-auto lg:basis-[60%]">
          <SlideShow />
        </div>
      </div>
    </section>
  );
}
