import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments/Comments";
import { PostsWrapper } from "./components/Posts/PostsWrapper";
import { PostDetails } from "./components/Posts/PostDetails";
import { Nav } from "./components/Nav";
import { AppLayout } from "./components/AppLayout";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route element={<AppLayout />}>
          <Route
            path="/posts"
            element={<PostsWrapper />}
          />
          <Route
            path="/posts/:id"
            element={<PostDetails />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
