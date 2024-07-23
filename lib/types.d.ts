import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TLink {
  label: string;
  path: string;
  subMenus?: { label: string; path: string }[];
}

export interface TSocial extends TLink {
  icon: string | StaticImport;
}

export interface Tag {
  image: StaticImport | string;
  left: string;
  top: string;
}

export interface TeamMember {
  name: string;
  role: string;
  tags: Tag[];
  image: StaticImport | string;
}

export interface TouchPoint {
  title: string;
  description: string;
  details: string;
  image: StaticImport | string;
  icon: StaticImport | string;
}
