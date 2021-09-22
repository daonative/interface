import { FilmNoise, Gradient } from "./Gradient";

export const NoiseBackground = () => {
  return (
    <FilmNoise className="fixed top-0 w-">
      <Gradient />
    </FilmNoise>
  );
};
