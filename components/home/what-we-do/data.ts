import { TouchPoint } from "@/lib/types";

import t1 from "@/assets/images/what-we-do/touchpoints-01.jpg";
import t2 from "@/assets/images/what-we-do/touchpoints-02.jpg";
import t3 from "@/assets/images/what-we-do/touchpoints-03.jpg";
import t4 from "@/assets/images/what-we-do/touchpoints-04.jpg";

import i1 from "@/assets/icons/therapist-led.png";
import i2 from "@/assets/icons/therapists.png";
import i3 from "@/assets/icons/sms-support.png";
import i4 from "@/assets/icons/interactive-library.png";

export const touchponits: TouchPoint[] = [
  {
    icon: i1,
    title: "Personalized, therapist-led support groups",
    description:
      "Weekly virtual groups, consisting of 5-10 students and a licensed clinician, custom-tailored to each student’s needs, lived experiences, and personality type.",
    details:
      "Our program, rooted in the latest evidence-based practices, helps students build an inclusive community that understands the complexity of their experiences and supports them as they move forward.",
    image: t1,
  },
  {
    icon: i2,
    title: "1:1 check-ins with culturally-competent therapists",
    description:
      "Live one-on-one counseling sessions with a licensed therapist, providing students with the help they need from the privacy and comfort of their own devices.",
    details:
      "We provide on-demand access to a roster of diverse clinicians, specialized in a variety of therapeutic techniques and populations, that students can select from based on their personal preferences.",
    image: t2,
  },
  {
    icon: i3,
    title: "Real-time SMS support",
    description:
      "A dedicated care concierge that helps students stay accountable to their wellness goals and connects them to appropriate on- and off-campus resources.",
    details:
      "We leverage text messages, automated reminders, and interactive nudges to drive ongoing student engagement and accountability.",
    image: t3,
  },
  {
    icon: i4,
    title: "Interactive mental health resource library",
    description:
      "A suite of online, evidence-based tools that are customized for your students, helping them address common concerns 24/7/365.",
    details:
      "We enrich and empower students through interactive sessions, practice tools, and reflection exercises that are intelligently-surfaced to students based on their needs.",
    image: t4,
  },
];
