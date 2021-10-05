import { parseEther } from "@ethersproject/units";

export const getValueLocked = (sponsors) =>
  Object.values(sponsors).reduce((previous, next) => {
    return previous.add(parseEther(next.balance));
  }, parseEther("0"));
