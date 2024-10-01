import styled from "styled-components";

import chickenPestoZoodles from "src/assets/dummyFood/chicken-Pesto-Zoodles.jpg";
import LikeDefaultIcon from "src/assets/like-active-icon.svg?react";

import Button from "src/components/elements/Button/Button";
import RecipeInfoBar from "src/components/elements/Card/RecipeInfoBar";

import dummyRandomRecipe from "src/randomRecipe";

const UserRecipeContainer = styled.section`
  margin-bottom: 20px;
  h3 {
    margin-bottom: 9px;
    color: #fd5d69;
  }

  img {
    display: block;
    width: 100%;
    height: 153px;
    object-fit: cover;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
  }
`;
const RecipeCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
`;

const RecipeCard = styled.div`
  height: 226px;
  width: 170px;
  flex-shrink: 0;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const MiniFeaturedRecipeInfo = styled.div`
  margin: -4px 5px 5px 5px;
  padding: 8px 15px;
  height: 76px;
  display: flex;
  flex-direction: column;
  border: 1px solid #fd5d69;
  gap: 12px;
  background-color: #fffdf9;
  border-radius: 0 0 1rem 1rem;
`;

const RecentlyAddedRecipes = () => {
  return (
    <>
      <UserRecipeContainer>
        <h3>Recently Added</h3>
        <RecipeCardContainer>
          <RecipeCard>
            <ImageContainer>
              <img src={chickenPestoZoodles} alt="chicken-Pesto-Zoodles.jpg" />
              <Button>
                <LikeDefaultIcon />
              </Button>
            </ImageContainer>
            <MiniFeaturedRecipeInfo>
              <RecipeInfoBar
                title={dummyRandomRecipe[0].title}
                likes={dummyRandomRecipe[0].aggregateLikes}
                mins={dummyRandomRecipe[0].readyInMinutes}
              />
            </MiniFeaturedRecipeInfo>
          </RecipeCard>
          <RecipeCard>
            <ImageContainer>
              <img src={chickenPestoZoodles} alt="chicken-Pesto-Zoodles.jpg" />
              <Button>
                <LikeDefaultIcon />
              </Button>
            </ImageContainer>
            <MiniFeaturedRecipeInfo>
              <RecipeInfoBar
                title={dummyRandomRecipe[0].title}
                likes={dummyRandomRecipe[0].aggregateLikes}
                mins={dummyRandomRecipe[0].readyInMinutes}
              />
            </MiniFeaturedRecipeInfo>
          </RecipeCard>
        </RecipeCardContainer>
      </UserRecipeContainer>
    </>
  );
};
export default RecentlyAddedRecipes;