import { Comments } from "./Comments";
import { useGetPosts, useAddPost } from "../../hooks/usePosts";

export const CommentsContainer = () => {
  const { data, isLoading, isError, error } = useGetPosts("comments");
  const { mutate: addPost } = useAddPost();

  const handleAddComment = (data) => {
    addPost({ collectionName: "comments", data });
  };
  return (
    <Comments
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      handleAddComment={handleAddComment}
    />
  );
};
