import Cover from "@/components/home/Cover";
import Stats from "@/components/home/Stats";
import Team from "@/components/home/team";
import TrustedSchools from "@/components/home/trusted-schools";
import WhatWeDo from "@/components/home/what-we-do";

export default function Home() {
  return (
    <main>
      <Cover />
      <TrustedSchools />
      <WhatWeDo />
      <Stats />
      <Team />
    </main>
  );
}
