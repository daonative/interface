import { AnimatedLogo } from "./AnimatedLogo";
import Link from "next/link";

export const LandingNav = () => (
  <nav>
    <Link href="/app">
      <div className="flex justify-between items-center">
        <AnimatedLogo />
      </div>
    </Link>
  </nav>
);
