export const getValueLocked = (sponsors) =>
  Object.values(sponsors).reduce(
    (previous, next) => {
      return previous.balance + next.balance;
    },
    { balance: 0 }
  );
