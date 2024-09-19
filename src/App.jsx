import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "./pages";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;