import styled from "styled-components";

import chickenPestoZoodles from "src/assets/dummyFood/chicken-Pesto-Zoodles.jpg";
import LikeDefaultIcon from "src/assets/like-default-icon.svg?react";

import Button from "src/components/elements/Button/Button";
import RecipeInfoBar from "src/components/elements/Card/RecipeInfoBar";

import dummyRandomRecipe from "src/randomRecipe";

const UserRecipeContainer = styled.section`
  padding: 14px 38px 14px 38px;
  background: #fd5d69;
  margin: 0 -38px;
  border-radius: 20px;
  h3 {
    margin-bottom: 9px;
    color: #fffdf9;
  }

  img {
    display: block;
    width: 100%;
    height: 162px;
    object-fit: cover;
    border-radius: 1rem;
  }
`;
const RecipeCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
`;
const RecipeCard = styled.div`
  height: 195px;
  width: 170px;
  flex-shrink: 0;
  position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
`;

const MiniFeaturedRecipeInfo = styled.div`
  padding: 5px 15px;
  position: relative;
  bottom: 17%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #fffdf9;
  border-radius: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const UserRecipes = () => {
  return (
    <>
      <UserRecipeContainer>
        <h3>Your Recipes</h3>
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
export default UserRecipes;