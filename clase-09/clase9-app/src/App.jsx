import { CharacterDetailContainer, CharacterListContainer, NavBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<CharacterListContainer />} />
        <Route path="/characters/:status" element={<CharacterListContainer />} />
        <Route path="/character/:id" element={<CharacterDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
