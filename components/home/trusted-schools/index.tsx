import { guthenBloots } from "@/lib/fonts";
import Image from "next/image";
import arrow from "@/assets/images/trusted-schools-arrow.png";

import s1 from "@/assets/images/schools/binghamton-university.svg";
import s2 from "@/assets/images/schools/drexel-university.svg";
import s3 from "@/assets/images/schools/northwestern-university.svg";
import s4 from "@/assets/images/schools/uc-davis.svg";
import s5 from "@/assets/images/schools/washington-university-in-st-louis.svg";
import s6 from "@/assets/images/schools/boston-college.svg";
import s7 from "@/assets/images/schools/george-washington-university.svg";
import s8 from "@/assets/images/schools/scripps-college.png";
import s9 from "@/assets/images/schools/ucsd.svg";
import s10 from "@/assets/images/schools/williams-college.svg";
import GridCell from "./GridCell";

export default function TrustedSchools() {
  return (
    <section className="container w-full max-w-screen-xl pb-6 md:pt-20">
      <div className="mx-auto md:w-11/12 xl:px-6">
        <p
          className={`${guthenBloots.className} mb-6 flex items-end gap-1 text-center text-2xl text-[26px] md:mb-4 md:text-left`}
        >
          Trusted by students at over 100 schools:
          <Image
            src={arrow}
            width={50}
            height={51}
            className="hidden translate-y-4 object-contain md:block"
            alt="Cursive arrow"
          />
        </p>

        <div className="schools-shadow relative z-10 grid grid-cols-2 place-items-center gap-4 rounded-[20px] bg-white px-5 py-3 md:grid-cols-5 md:p-7 lg:p-9">
          <GridCell schools={[s1, s2]} order={1} />
          <GridCell schools={[s3, s4]} order={2} />
          <GridCell schools={[s5, s6]} order={3} />
          <GridCell schools={[s7, s8]} order={4} />
          <GridCell schools={[s9, s10]} order={5} hideOnMobile />
        </div>
      </div>
    </section>
  );
}
