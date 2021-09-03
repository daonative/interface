import styled from "styled-components";

const StyledButton = styled.button`
  font-size: clamp(1rem, 1.1vw, 1.3rem);
  font-family: "Space Grotesk", sans-serif;
`;

const FilledButton = ({ className, children }) => {
  return (
    <StyledButton
      className={`bg-prologe-primary border-2 border-prologe-primary text-white w-max px-6 py-4 block ${className} hover:bg-transparent hover:text-prologe-primary hover:font-bold`}
    >
      {children}
    </StyledButton>
  );
};
const OutlineButton = ({ className, children }) => {
  return (
    <StyledButton
      className={`text-prologe-primary border-2 border-prologe-primary  w-max px-6 py-4 block ${className} cursor-pointer hover:bg-prologe-primary hover:text-white`}
    >
      {children}
    </StyledButton>
  );
};

const Button = ({ children = "", className, type }) => {
  if (type === "outline")
    return <OutlineButton className={className}>{children}</OutlineButton>;
  return <FilledButton className={className}>{children}</FilledButton>;
};

export default Button;
