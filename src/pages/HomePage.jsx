import styled from "styled-components";
import {
  HomePageHeader,
  RecipeCategories,
  TrendingRecipes,
  UserRecipes,
  RecentlyAddedRecipes,
} from "src/components";


const HomePageContainer = styled.div`
  padding: 3rem 2.2rem 0 2.2rem;
  display: flex;
  flex-direction: column;
  gap:19px;
`;

const HomePage = ({ toggleTheme, isDarkMode }) => {
  return (
    <HomePageContainer>
      <HomePageHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <RecipeCategories />
      <TrendingRecipes />
      <UserRecipes />
      <RecentlyAddedRecipes />
    </HomePageContainer>
  );
};
export default HomePage;