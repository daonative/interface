import { NoiseBackground } from "./NoiseBackground";

export const Background = () => {
  return (
    <div className="fixed top-0 h-screen w-screen bg-prologe-white">
      <NoiseBackground />

      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-light border-opacity-50 fixed right-1/4 top-0`}
      ></div>
      <div
        className={`hidden lg:block h-screen border-r-prologe border-prologe-light border-opacity-50 fixed left-1/4 top-0`}
      ></div>
    </div>
  );
};
