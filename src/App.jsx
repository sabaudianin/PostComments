import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments";
import { Products } from "./components/Products";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/product/:id"
          element={<Products />}
        />
        <Route
          path="/comments"
          element={<Comments />}
        />
      </Routes>
    </BrowserRouter>
  );
};
