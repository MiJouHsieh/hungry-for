import styled from "styled-components";

const StyledTitle = styled.h1`
  line-height: 22px;
  font-size: 20px;
  font-weight: 600;
  color: #fd5d69;
`;

const PageTitle = ({ title }) => {
  return (
    <>
      <StyledTitle>{title}</StyledTitle>
    </>
  );
};
export default PageTitle;
