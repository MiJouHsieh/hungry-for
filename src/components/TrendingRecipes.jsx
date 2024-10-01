import styled from "styled-components";

import dummyRandomRecipe from 'src/randomRecipe'
import chickenPestoZoodles from "src/assets/dummyFood/chicken-Pesto-Zoodles.jpg";
import LikeDefaultIcon from "src/assets/like-default-icon.svg?react";
import LikesIcon from "src/assets/likes-icon.svg?react";
import TimeIcon from "src/assets/time-icon.svg?react";

const TrendingRecipeContainer = styled.section`
  h3 {
    margin-bottom: 9px;
  }

  img {
    width: 100%;
    height: 143px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const ImageContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
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

const FeaturedRecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #fd5d69;

  margin-top: -1rem;
  padding: 1rem 1rem 0 1rem;
  border-radius: 0 0 15px 15px;
`;
const RecipeName = styled.div`
  line-height: 15px;

  h6 {
    height: 20px;
    font-size: 13px;
    font-weight: 400;
  }
  p {
    font-weight: 300;
    line-height: 15px;
    font-size: 13px;
    font-family: "League Spartan", sans-serif;
  }
`;
const RecipeTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 18px;
  font-size: 12px;
  color: #ec888d;
  span {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

const summaryText = dummyRandomRecipe[0].summary

function stripHtmlTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}

function truncateText(str, length) {
  if (str.length > length) {
    return str.slice(0, length) + '...';
  }
  return str;
}
// 移除 HTML 標籤
const cleanText = stripHtmlTags(summaryText);

// 限制顯示 100 字符
const truncatedText = truncateText(cleanText, 25);

const TrendingRecipes = () => {
  return (
    <TrendingRecipeContainer>
      <h3>Trending Recipes</h3>
      <div id={dummyRandomRecipe[0].id}>
        <ImageContainer>
          <img src={chickenPestoZoodles} alt="chicken-Pesto-Zoodles.jpg" />
          <Button>
            <LikeDefaultIcon />
          </Button>
        </ImageContainer>
        <FeaturedRecipeInfo>
          <RecipeName>
            <h6>{dummyRandomRecipe[0].title}</h6>
            <p>{truncatedText}</p>
          </RecipeName>

          <RecipeTime>
            <span>
              <LikesIcon /> {dummyRandomRecipe[0].aggregateLikes}
            </span>
            <span>
              <TimeIcon /> {dummyRandomRecipe[0].readyInMinutes} mins
            </span>
          </RecipeTime>
        </FeaturedRecipeInfo>
      </div>
    </TrendingRecipeContainer>
  );
};
export default TrendingRecipes;
