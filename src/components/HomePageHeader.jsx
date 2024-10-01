import SearchDefaultIcon from "src/assets/search-default-icon.svg?react";
import styled from "styled-components";
import { useMemo } from "react";
import MoonIcon from "src/assets/icon-moon.svg?react";
import SunIcon from "src/assets/icon-sun.svg?react";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  h5 {
    font-size: 1.5rem;
    font-weight: 400;
    color: #fd5d69;
  }
  p {
    font-size: 0.85rem;
  }
`;

const HeaderTools = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:5px;
`;

const ThemeToggleButton = ({ toggleTheme, isDarkMode }) => {
  const memoizedButton = useMemo(
    () => (
      <Button
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <SunIcon /> : <MoonIcon />}
      </Button>
    ),
    [toggleTheme, isDarkMode]
  );

  return memoizedButton;
};

const Button = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.themeToggleButtonColor};
  cursor: pointer;
  width: 28px;
  height: 28px;

  svg {
    color: ${(props) => props.theme.themeToggleButtonColor};
  }

  &:hover,
  &:focus {
    background: none;

    span,
    svg {
      color: ${(props) => props.theme.themeToggleButtonHoverColor};
    }
  }
`;

const HomePageHeader = ({ toggleTheme, isDarkMode }) => {
  return (
    <HeaderContainer>
      <StyledHeader>
        <div>
          <h5>Hi userName</h5>
          <p>What are you cooking today</p>
        </div>
        <HeaderTools>
          <SearchDefaultIcon />
          <ThemeToggleButton
            toggleTheme={toggleTheme}
            isDarkMode={isDarkMode}
          />
        </HeaderTools>
      </StyledHeader>
    </HeaderContainer>
  );
};
export default HomePageHeader;
