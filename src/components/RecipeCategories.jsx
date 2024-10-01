import styled from "styled-components";

const RecipeCategoriesContainer = styled.section`
  height: 1.5rem;
  width: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;

    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  li {
    height: 1.5rem;
    padding: 0 0.5rem;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    list-style: none;
    color: #fd5d69;
    font-size: 1rem;
    line-height: 1;

    &:hover,
    &:focus {
      background: #fd5d69;
      border-radius: 0.75rem;
      color: #fffdf9;
      cursor: pointer;
    }
  }
`;
const RecipeCategories = ( ) => {
  return (
    <RecipeCategoriesContainer>
      <ul>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
        <li>Vegan</li>
        <li>Dessert</li>
      </ul>
    </RecipeCategoriesContainer>
  );
};
export default RecipeCategories;