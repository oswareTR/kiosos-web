import Image from "next/image";
import Link from "next/link";
import logoDark from "@/assets/logo_dark.png";
import logoLight from "@/assets/logo_light.png";

type NavbarLogoProps = {
  onNavigate?: () => void;
};

export function NavbarLogo({ onNavigate }: NavbarLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      aria-label="Kiosos home"
    >
      <Image
        src={logoDark}
        alt="Kiosos"
        width={89}
        height={48}
        className="show-light-only h-12 w-auto"
        style={{ width: "auto", height: "auto" }}
        priority
      />
      <Image
        src={logoLight}
        alt="Kiosos"
        width={89}
        height={48}
        className="show-dark-only h-12 w-auto"
        style={{ width: "auto", height: "auto" }}
        priority
      />
    </Link>
  );
}
