import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments/Comments";
import { PostsWrapper } from "./components/Posts/PostsWrapper";
import { CommentsContainer } from "./components/Comments/CommentsContainer";

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
          element={<PostsWrapper />}
        />
        <Route
          path="/comments/1"
          element={<CommentsContainer />}
        />
      </Routes>
    </BrowserRouter>
  );
};
