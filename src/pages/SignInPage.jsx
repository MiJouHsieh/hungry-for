import styled from "styled-components";
import { AuthInput, PageTitle, AuthButton } from "src/components";

const AuthContainer = styled.div`
  width: 100%;
  padding: 4rem 2rem;
  background: beige;
  height: 100%;
  outline: 1px dotted red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  // justify-content: start;
  align-items: center;

`;
const AuthInputContainerGroups = styled.div`
  outline: 1px solid blue;
  margin: 7rem 0 5rem 0;
`;
const AuthInputContainer = styled.div`
  outline: 1px solid blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  font-size: 15px;
`;

const StyledBtnGroup = styled.div`
  outline: 1px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledP = styled.p`
  outline: 1px solid blue;
  margin-top: 1rem;
  text-align: center;
  font-size: 13px;
  line-height: 15px;
`;

const SignInPage = () => {
  return (
    <AuthContainer>
      <PageTitle title="Login" />
      <AuthInputContainerGroups>
        <AuthInputContainer>
          <AuthInput
            label="Email"
            placeholder="your email"
            value={"example@example.com"}
            // onChange={(emailInputValue) => setEmail(emailInputValue)}
          />
        </AuthInputContainer>

        <AuthInputContainer>
          <AuthInput
            type="password"
            label="Password"
            placeholder="your password"
            value={"password"}
            // onChange={(passwordInputValue) => setPassword(passwordInputValue)}
          />
        </AuthInputContainer>
      </AuthInputContainerGroups>

      <StyledBtnGroup>
        <AuthButton btnTitle="Sign in"></AuthButton>
        <AuthButton btnTitle="Sign Up"></AuthButton>
      </StyledBtnGroup>

      {/* <AuthButton onClick={handleClick}>註冊</AuthButton> */}
      {/* <Link to="/login">
      <AuthLinkText>取消</AuthLinkText>
    </Link> */}
      <StyledP>{`Don’t have an account? Sign Up `}</StyledP>
    </AuthContainer>
  );
};
export default SignInPage

