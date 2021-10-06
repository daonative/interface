import Link from "next/link";
import { AnimatedLogo } from "./AnimatedLogo";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between flex-wrap mb-3">
      <Link href={"/"}>
        <div className="flex justify-between items-center">
          <AnimatedLogo />
        </div>
      </Link>
      <div className="flex items-center gap-5">
        <div>
          <Link href="/faq">
            <a className="text-lg">faq</a>
          </Link>
        </div>

        <a className="text-lg" href="https://blog.prologe.press">
          blog
        </a>
        <Link href="/about">
          <a className="text-lg">about</a>
        </Link>

        <a
          className="bluebar text-lg w-max flex relative"
          target="_blank"
          href="https://discord.gg/rf837mkdBW"
        >
          join our discord
        </a>
      </div>
    </nav>
  );
}
