import { LandingNav } from "./LandingNav";
import Link from "next/link";
import A from "./A";

export function Navigation() {
  return (
    <div className="flex items-center justify-between">
      <LandingNav />
      <div className="flex items-center gap-5">
        <a href="https://blog.prologe.press">blog</a>
        <Link href="/about">
          <a className="text-lg">about</a>
        </Link>

        <A
          className="bluebar md:hidden"
          target="_blank"
          href="https://discord.gg/rf837mkdBW"
        >
          join our discord
        </A>
      </div>
    </div>
  );
}
