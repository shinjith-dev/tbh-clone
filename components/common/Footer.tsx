import Image from "next/image";
import logoWhite from "@/assets/icons/logo-white.svg";
import { guthenBloots, recoletta } from "@/lib/fonts";
import { TLink, TSocial } from "@/lib/types";
import instagram from "@/assets/icons/instagram.svg";
import tiktok from "@/assets/icons/tiktok.png";
import Link from "next/link";
import privacyBadge from "@/assets/icons/privacy-badge.png";
import tick from "@/assets/icons/tick.svg";

const products: TLink[] = [
  { label: "For K12", path: "/" },
  { label: "For Higher Ed", path: "/" },
  { label: "For Children", path: "/" },
  { label: "For Parents", path: "/" },
  { label: "For Enterprise", path: "/" },
];

const company: TLink[] = [
  { label: "About Us", path: "/" },
  { label: "Careers", path: "/" },
  { label: "Press Kit", path: "/" },
  { label: "Blog", path: "/" },
];

const socials: TSocial[] = [
  { label: "Instagram", path: "/", icon: instagram },
  { label: "TikTok", path: "/", icon: tiktok },
];

const privacy: string[] = [
  "SOC2 Compliant",
  "Activity Monitoring",
  "Data Encryption",
];

const footerLinks: TLink[] = [
  { label: "Terms", path: "/" },
  { label: "Privacy", path: "/" },
  { label: "Contact us", path: "/" },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="clip-footer-bg bg-background-2 pb-6 pt-40 text-white md:pb-12 md:pt-52">
        <div className="container max-w-screen-xl md:space-y-20 lg:px-10 xl:px-20">
          <div className="flex items-start justify-between gap-16">
            <div className="hidden shrink-0 basis-1/5 md:block">
              <Image src={logoWhite} height={57} width={100} alt="logo" />
            </div>

            <div className="grow basis-4/5">
              <h3 className="mb-8 leading-[0.9] lg:leading-[0.8]">
                <span
                  className={`${guthenBloots.className} mr-3 text-4xl text-[40px] lg:text-[50px] xl:text-[70px]`}
                >
                  Reinventing
                </span>
                <span
                  className={`${recoletta.className} text-4xl text-[34px] md:text-[50px] lg:text-[60px]`}
                >
                  mental health for
                  <br />a new generation
                </span>
              </h3>

              <div className="flex flex-col justify-between text-center md:flex-row md:text-left">
                <div className="space-y-4 border-b pb-12 pt-8 md:space-y-6 md:border-none">
                  <h4
                    className={`${recoletta.className} text-2xl md:text-[30px]`}
                  >
                    Products
                  </h4>

                  <ul className="space-y-1">
                    {products.map((product) => (
                      <li key={product.label}>
                        <Link href={product.path}>{product.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 border-b border-border-dark pb-12 pt-8 md:space-y-6 md:border-b-0 md:border-l md:pl-16">
                  <h4
                    className={`${recoletta.className} text-2xl md:text-[30px]`}
                  >
                    Company
                  </h4>

                  <ul className="space-y-1">
                    {company.map((com) => (
                      <li key={com.label}>
                        <Link href={com.path}>
                          {com.label}{" "}
                          <span className="text-muted-dark">(Coming soon)</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 border-border-dark pb-12 pt-8 md:space-y-6 md:border-b-0 md:border-l md:pl-16">
                  <h4
                    className={`${recoletta.className} text-2xl md:text-[30px]`}
                  >
                    Follow us
                  </h4>

                  <ul className="flex justify-center gap-6 md:flex-row">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <Link
                          href={social.path}
                          className="flex items-center justify-center gap-2 md:justify-start"
                        >
                          <Image
                            alt={social.label}
                            src={social.icon}
                            height={18}
                            width={18}
                          />
                          <span className="hidden md:block">
                            {social.label}{" "}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 text-xl text-subtle-dark md:flex-row md:gap-16">
            <div className="grow basis-[50%] border-t border-border-dark pt-8 md:pt-12">
              <p className="mb-12">We respect your privacy.</p>

              <div className="flex gap-12">
                <div className="relative h-20 w-16 md:h-28 md:w-24">
                  <Image src={privacyBadge} alt="Privacy badge" fill />
                </div>

                <ul className="space-y-3 text-lg">
                  {privacy.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-sm md:text-base"
                    >
                      <Image width={28} height={21} src={tick} alt="tick" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grow-0 basis-[40%] space-y-6 border-t border-border-dark pt-12">
              <p>
                If you or someone you know is experiencing an emergency or
                crisis and needs immediate help, call 911 or go to the nearest
                emergency room.
              </p>

              <ul className="flex gap-4">
                <li className="grow">
                  <p className="mb-1 text-xs text-muted-dark md:mb-0 md:text-sm">
                    Suicide Prevention Lifeline
                  </p>
                  <p className="text-sm text-white md:text-base">
                    +1 (800) 273-8255 24/7
                  </p>
                </li>
                <li className="grow">
                  <p className="mb-1 text-xs text-muted-dark md:mb-0 md:text-sm">
                    Crisis Text Line
                  </p>
                  <p className="text-sm text-white md:text-base">
                    Text HOME to 741741 24/7
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 pt-12 text-lg text-[rgb(170,170,170)] md:flex-row">
            <p className="text-center md:text-start">
              © 2024 Mindset Labs, Inc.
            </p>

            <ul className="flex justify-center gap-3 md:justify-start">
              {footerLinks.map((link, index) => (
                <li key={link.label}>
                  <Link
                    className={`border-subtle pl-3 ${index !== 0 && "border-l"}`}
                    href={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
