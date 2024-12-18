import { PostFilter } from "./PostFilter";
import { useGetPosts } from "../../hooks/usePosts";

export const PostsWrapper = () => {
  const { data, isLoading, isError, error } = useGetPosts("posts");

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <PostFilter data={data} />;
};
