import styled from "styled-components";

const StyledButton = styled.button`
  font-size: clamp(1rem, 1.1vw, 1.3rem);
  font-family: "Space Grotesk", sans-serif;
`;

const FilledButton = ({ className, children, onClick = () => null }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`bg-prologe-primary border-2 border-prologe-primary text-white w-max px-6 py-4 block ${className} `}
    >
      {children}
    </StyledButton>
  );
};
const OutlineButton = ({ className, children, onClick = () => null }) => {
  return (
    <StyledButton
      onClick={onClick}
      className={`text-prologe-primary border-2 border-prologe-primary  w-max px-6 py-4  ${className} `}
    >
      {children}
    </StyledButton>
  );
};

const Button = ({
  children = "",
  className = "",
  type = "",
  onClick = () => null,
}) => {
  if (type === "outline")
    return (
      <OutlineButton onClick={onClick} className={className}>
        {children}
      </OutlineButton>
    );
  return (
    <FilledButton onClick={onClick} className={className}>
      {children}
    </FilledButton>
  );
};

export default Button;
