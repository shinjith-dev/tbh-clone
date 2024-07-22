import { TeamMember } from "@/lib/types";

import divya from "@/assets/images/team/divya.jpg";
import divyaT0 from "@/assets/images/team/divya/tag-0.png";
import divyaT1 from "@/assets/images/team/divya/tag-1.png";
import divyaT2 from "@/assets/images/team/divya/tag-2.png";
import divyaT3 from "@/assets/images/team/divya/tag-3.png";
import divyaT4 from "@/assets/images/team/divya/tag-4.png";
import divyaT5 from "@/assets/images/team/divya/tag-5.png";

import gabriel from "@/assets/images/team/gabriel.jpg";
import gabrielT0 from "@/assets/images/team/gabriel/tag-0.png";
import gabrielT1 from "@/assets/images/team/gabriel/tag-1.png";
import gabrielT2 from "@/assets/images/team/gabriel/tag-2.png";
import gabrielT3 from "@/assets/images/team/gabriel/tag-3.png";
import gabrielT4 from "@/assets/images/team/gabriel/tag-4.png";

import ghazal from "@/assets/images/team/ghazal.jpg";
import ghazalT0 from "@/assets/images/team/ghazal/tag-0.png";
import ghazalT1 from "@/assets/images/team/ghazal/tag-1.png";
import ghazalT2 from "@/assets/images/team/ghazal/tag-2.png";
import ghazalT3 from "@/assets/images/team/ghazal/tag-3.png";
import ghazalT4 from "@/assets/images/team/ghazal/tag-4.png";

import helen from "@/assets/images/team/helen.jpg";
import helenT0 from "@/assets/images/team/helen/tag-0.png";
import helenT1 from "@/assets/images/team/helen/tag-1.png";
import helenT2 from "@/assets/images/team/helen/tag-2.png";
import helenT3 from "@/assets/images/team/helen/tag-3.png";
import helenT4 from "@/assets/images/team/helen/tag-4.png";

import jeremy from "@/assets/images/team/jeremy.jpg";
import jeremyT0 from "@/assets/images/team/jeremy/tag-0.png";
import jeremyT1 from "@/assets/images/team/jeremy/tag-1.png";
import jeremyT2 from "@/assets/images/team/jeremy/tag-2.png";
import jeremyT3 from "@/assets/images/team/jeremy/tag-3.png";
import jeremyT4 from "@/assets/images/team/jeremy/tag-4.png";

import kaela from "@/assets/images/team/kaela.jpg";
import kaelaT0 from "@/assets/images/team/kaela/tag-0.png";
import kaelaT1 from "@/assets/images/team/kaela/tag-1.png";
import kaelaT2 from "@/assets/images/team/kaela/tag-2.png";
import kaelaT3 from "@/assets/images/team/kaela/tag-3.png";

const members: TeamMember[] = [
  {
    name: "Divya",
    image: divya,
    tags: [
      { image: divyaT0, top: "15%", left: "0%" },
      { image: divyaT1, top: "5%", left: "70%" },
      { image: divyaT2, top: "45%", left: "15%" },
      { image: divyaT3, top: "65%", left: "-5%" },
      { image: divyaT4, top: "35%", left: "60%" },
      { image: divyaT5, top: "65%", left: "60%" },
    ],
    role: "LMHC",
  },
  {
    name: "Gabriel",
    image: gabriel,
    tags: [
      { image: gabrielT0, top: "10%", left: "70%" },
      { image: gabrielT1, top: "15%", left: "0%" },
      { image: gabrielT2, top: "75%", left: "70%" },
      { image: gabrielT3, top: "65%", left: "20%" },
      { image: gabrielT4, top: "80%", left: "0%" },
    ],
    role: "PsyD",
  },
  {
    name: "Ghazal",
    image: ghazal,
    tags: [
      { image: ghazalT0, top: "10%", left: "-5%" },
      { image: ghazalT1, top: "15%", left: "65%" },
      { image: ghazalT2, top: "75%", left: "0%" },
      { image: ghazalT3, top: "55%", left: "20%" },
      { image: ghazalT4, top: "65%", left: "70%" },
    ],
    role: "LMFT",
  },
  {
    name: "Helen",
    image: helen,
    tags: [
      { image: helenT0, top: "15%", left: "0%" },
      { image: helenT1, top: "5%", left: "70%" },
      { image: helenT2, top: "70%", left: "-5%" },
      { image: helenT3, top: "55%", left: "30%" },
      { image: helenT4, top: "65%", left: "70%" },
    ],
    role: "M.A.",
  },
  {
    name: "Jeremy",
    image: jeremy,
    tags: [
      { image: jeremyT0, top: "25%", left: "-5%" },
      { image: jeremyT1, top: "5%", left: "50%" },
      { image: jeremyT2, top: "75%", left: "-5%" },
      { image: jeremyT3, top: "45%", left: "10%" },
      { image: jeremyT4, top: "55%", left: "70%" },
    ],
    role: "PhD",
  },
  {
    name: "kaela",
    image: kaela,
    tags: [
      { image: kaelaT0, top: "25%", left: "-5%" },
      { image: kaelaT1, top: "5%", left: "60%" },
      { image: kaelaT2, top: "55%", left: "50%" },
      { image: kaelaT3, top: "80%", left: "-5%" },
    ],
    role: "LMFT",
  },
];

export default members;
