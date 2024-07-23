import { guthenBloots, recoletta } from "@/lib/fonts";
import Image from "next/image";
import cover from "@/assets/images/cover.svg";

export default function Cover() {
  return (
    <section className="container w-full max-w-screen-xl pb-6 md:pt-5">
      <div className="mx-auto flex flex-col items-stretch justify-start lg:w-11/12 lg:flex-row">
        <div className="shrink-0 basis-[50%] text-center md:text-start xl:pl-6">
          <h2
            className={`${recoletta.className} mb-8 text-4xl text-[40px] font-extrabold leading-[0.8] md:mb-10 md:text-5xl lg:text-7xl`}
          >
            <span
              className="cover-title mr-2 md:mr-3"
              style={{ animationDelay: "200ms" }}
            >
              Mental
            </span>
            <span
              className="cover-title delay-150"
              style={{ animationDelay: "500ms" }}
            >
              health,
            </span>
            <br />
            <span
              className="cover-title mr-2 md:mr-3"
              style={{ animationDelay: "400ms" }}
            >
              reimagined
            </span>
            <span className="cover-title" style={{ animationDelay: "500ms" }}>
              for
            </span>
            <br />
            <span
              className={`${guthenBloots.className} cover-title text-5xl text-[54px] font-medium leading-tight md:mt-3 md:text-7xl lg:text-8xl`}
              style={{ animationDelay: "600ms" }}
            >
              students
            </span>
          </h2>

          <p
            className="cover-para mx-auto mb-8 max-w-80 text-lg font-medium leading-tight md:mb-10 md:ml-0 md:max-w-[370px] md:text-xl md:leading-none lg:text-2xl"
            style={{ animationDelay: "800ms" }}
          >
            Helping your students succeed and thrive with the help of licensed
            therapists and a community of peers. When and where they need it
            most.
          </p>

          <div className="cover-btn" style={{ animationDelay: "1000ms" }}>
            <button className="scale-100 rounded-lg bg-primary px-8 py-3 font-extrabold transition-all hover:scale-105 md:px-10 md:text-lg xl:px-12 xl:py-4">
              {" "}
              Join now
            </button>
          </div>
        </div>

        <div className="relative h-[90vw] w-full grow self-end md:-ml-36 md:h-[600px]">
          <Image src={cover} alt="Cover image" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
