import { Logo } from "./Logo";
import A from "./A";

// check nav in mobile browser before refactoring
export const Nav = ({className}) => {
  return (
    <div className={`flex ${className}`}>
      <div className="relative flex flex-col justify-center items-center md:pl-4">
        <Logo />
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
};
