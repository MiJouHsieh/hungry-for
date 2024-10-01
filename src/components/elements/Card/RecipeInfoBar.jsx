import styled from "styled-components";

import LikesIcon from "src/assets/likes-icon.svg?react";
import TimeIcon from "src/assets/time-icon.svg?react";

const RecipeName = styled.div`
  h6 {
    line-height: 15px;
    font-size: 13px;
    font-weight: 400;
    color: #32201c;
  }
`;

const StyledRecipeInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #ec888d;
  height: 18px;
  span {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const RecipeInfoBar = ({ title, likes, mins }) => {
  return (
    <>
      <RecipeName>
        <h6>{title}</h6>
      </RecipeName>

      <StyledRecipeInfoBar>
        <span>
          <LikesIcon /> {likes}
        </span>
        <span>
          <TimeIcon /> {mins} mins
        </span>
      </StyledRecipeInfoBar>
    </>
  );
};
export default RecipeInfoBar;
