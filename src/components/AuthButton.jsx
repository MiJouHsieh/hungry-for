import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 30px;
  background-color: #fd5d69;
  border: none;

  color: #fffdf9;
  width: 12rem;
  height: 45px;
  font-weight: 600;
  line-height: 22px;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    border: 1px solid #ffc6c9;
  }
`;

const AuthButton = ({btnTitle}) => {
  return <StyledButton >{btnTitle}</StyledButton> ;
};
export default AuthButton;
