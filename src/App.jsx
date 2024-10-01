import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SignInPage, SignUpPage, UserProfilePage } from "src/pages";

import { useState } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "src/theme/theme";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
  }
`;

const Container = styled.div`
  margin: 0 auto;
  height: 932px;
  width: 100%;
  min-width: 360px;

  @media screen and (min-width: 376px) {
    max-width: 573px;
    padding: 0;
  }

  @media screen and (min-width: 769px) {
    max-width: 1440px;
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="signup" element={<SignUpPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route
              path="*"
              element={
                <HomePage toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
              }
            />
            <Route
              path="user-profile-page"
              element={<UserProfilePage />}
              toggleTheme={toggleTheme}
              isDarkMode={isDarkMode}
            />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;