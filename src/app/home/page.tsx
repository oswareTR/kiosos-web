import { HomePage, homeMetadata } from "@/components/home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...homeMetadata,
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default HomePage;
