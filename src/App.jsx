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
          path="/posts/:id"
          element={<PostsDetailWrapper />}
        />
        <Route
          path="/comments"
          element={<Comments />}
        />
      </Routes>
    </BrowserRouter>
  );
};
