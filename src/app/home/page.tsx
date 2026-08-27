import { HomeApp } from "@/components/home/HomeApp";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeInstallations } from "@/components/home/HomeInstallations";
import { HomeSolutions } from "@/components/home/HomeSolutions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kiosos — Kiosk software and on-site installations",
  description:
    "Kiosos produces software-powered kiosks and on-site installations for cafes and restaurants, plus a mobile app for owners to manage menus, promotions, and more.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeSolutions />
      <HomeInstallations />
      <HomeApp />
      <HomeCta />
    </>
  );
}
