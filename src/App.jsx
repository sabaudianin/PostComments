import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments";
import { PostsDetailWrapper } from "./components/PostDetailWrapper";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/posts"
          element={<PostsDetailWrapper />}
        />
        <Route
          path="/comments/1"
          element={<Comments />}
        />
      </Routes>
    </BrowserRouter>
  );
};
