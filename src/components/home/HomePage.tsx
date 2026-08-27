import { HomeApp } from "@/components/home/HomeApp";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeInstallations } from "@/components/home/HomeInstallations";
import { HomeSolutions } from "@/components/home/HomeSolutions";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const homeMetadata: Metadata = {
  title: "Kiosos — Kiosk yazılımı ve yerinde kurulum",
  description:
    "Kiosos, kafe ve restoranlar için yazılım destekli kiosk ve yerinde kurulum üretir; işletme sahiplerine menü, kampanya ve daha fazlasını yönetecek bir mobil uygulama sunar.",
  alternates: {
    canonical: "/",
  },
};

export function HomePage() {
  return (
    <>
      <JsonLd />
      <HomeHero />
      <HomeSolutions />
      <HomeInstallations />
      <HomeApp />
      <HomeCta />
    </>
  );
}
