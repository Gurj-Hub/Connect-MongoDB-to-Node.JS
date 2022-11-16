// import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*">404: Oops!</Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
