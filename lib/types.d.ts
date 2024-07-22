import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface TLink {
  label: string;
  path: string;
  subMenus?: { label: string; path: string }[];
}

export interface TSocial extends TLink {
  icon: string | StaticImport;
}
