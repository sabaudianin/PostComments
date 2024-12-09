import { useGetPostById } from "../../hooks/usePosts";
import { PostList } from "./PostList";

export const PostDetails = ({
  data,
  isLoading,
  isError,
  error,
  handleAddPost,
}) => {
  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  console.log("Posts", data);
  return <PostList data={data} />;
};
