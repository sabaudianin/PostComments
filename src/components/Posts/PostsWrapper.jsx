import { PostList } from "./PostList";
import { useGetPosts } from "../../hooks/usePosts";

export const PostsWrapper = () => {
  const { data, isLoading, isError, error } = useGetPosts("posts");

  const handleAddPost = (data) => {
    addPost({ collectionName: "posts", data });
  };

  return (
    <PostList
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      handleAddPost={handleAddPost}
    />
  );
};
