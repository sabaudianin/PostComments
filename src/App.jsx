import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments";
import { Posts } from "./components/Posts";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/posts/:id"
          element={<Posts />}
        />
        <Route
          path="/comments"
          element={<Comments />}
        />
      </Routes>
    </BrowserRouter>
  );
};
