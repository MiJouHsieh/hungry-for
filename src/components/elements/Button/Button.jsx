import styled from "styled-components";

const StyledButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.themeToggleButtonColor};
  cursor: pointer;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover,
  &:focus {
    // background: none;
  }
`;
const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>;
}
export default Button;