import { AudienceGroup } from "@/lib/types";
import a1 from "@/assets/images/who-we-help/whoWeHelp-01.png";
import a2 from "@/assets/images/who-we-help/whoWeHelp-02.png";
import a3 from "@/assets/images/who-we-help/whoWeHelp-03.png";
import a4 from "@/assets/images/who-we-help/whoWeHelp-04.png";

export const audience: AudienceGroup[] = [
  {
    title: "K12",
    description:
      "We provide the most comprehensive approach to MTSS — helping schools quickly and proactively identify students in need and offer them personalized, targeted interventions. Through our platform, districts can implement data-driven decision making, progress monitoring, and evidence-based supports.",
    link: "/",
    image: a1,
  },
  {
    title: "Higher Education",
    description:
      "We work as a digital extension of your on-campus counseling center, allowing you to reach diverse, underserved student populations without a heavy lift on your staff. Whether your students utilize groups, individual counseling, or any other resource on our platform, our solution keeps students engaged—and in school.",
    link: "/",
    image: a2,
  },
  {
    title: "Families",
    description:
      "We provide virtual care that works for kids—and their parents. Whether you're interested in getting help for your child, or want to join a parent-only group for yourself, we got you covered. We'll pair you with the right therapist and tbh group—for children or parents—in no time.",
    link: "/",
    image: a3,
  },
  {
    title: "Enterprise",
    description:
      "Your company grows when your people do. We offer therapist-led, culturally-inclusive mental health support for your most important asset: your employees. Boost your team’s retention and improve new candidate recruitment with a benefits package that encourages authentic connection, belonging, and personal growth.",
    link: "/",
    image: a4,
  },
];
