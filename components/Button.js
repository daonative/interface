import styled from "styled-components";

const StyledButton = styled.button`
  font-size: clamp(1rem, 1.1vw, 1.3rem);
  font-family: "Space Grotesk", sans-serif;
`;

const FilledButton = ({ className, children, ...rest }) => {
  return (
    <StyledButton
      className={`bg-prologe-primary border-2 border-prologe-primary text-white w-max px-6 py-4 block ${className} `}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};
const OutlineButton = ({ className, children, ...rest }) => {
  return (
    <StyledButton
      className={`text-prologe-primary border-2 border-prologe-primary  w-max px-6 py-4  ${className} `}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const Button = ({ children = "", className = "", variant = "", ...rest }) => {
  if (variant === "outline")
    return (
      <OutlineButton className={className} {...rest}>
        {children}
      </OutlineButton>
    );
  return (
    <FilledButton className={className} {...rest}>
      {children}
    </FilledButton>
  );
};

export default Button;
