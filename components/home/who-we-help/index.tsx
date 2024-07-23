import { guthenBloots } from "@/lib/fonts";
import Audience from "./Audience";

export default function WhoWeHelp() {
  return (
    <section className="bg-white px-2 pb-16 pt-12">
      <div className="clip-who-we-help container max-w-screen-xl bg-primary pt-20 lg:pr-0">
        <p
          className={`${guthenBloots.className} mx-0 mb-2 text-2xl text-[26px] md:mx-4 md:mb-5 lg:mx-8 lg:mb-8 xl:mx-12`}
        >
          Who we help?
        </p>

        <div className="border-b border-fg md:mx-4 lg:mx-8 xl:mx-12" />

        <Audience />
      </div>
    </section>
  );
}
