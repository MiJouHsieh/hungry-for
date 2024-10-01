import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${(props) => props.theme.labelColor};
`;

const StyledInput = styled.input`
  background: #ffc6c9;
  border-radius: 18px;
  font-size: 1rem;
  margin: 9px 0;
  padding: 0 2.25rem;
  height: 2.5rem;
  outline: #ec888d;
  border: none;
  color: #997474;
`;
const AuthInput = ({ label, type, value, placeholder }) => {
  return (
    <>
      <StyledLabel htmlFor="">{label}</StyledLabel>
      <StyledInput
        type={type || "text"}
        value={value}
        placeholder={placeholder}
        // onChange={(event) => onChange?.(event.target.value)}
      />
    </>
  );
};

export default AuthInput;
