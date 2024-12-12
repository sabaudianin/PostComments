import { Comments } from "./Comments";
import { useGetPosts, useAddPost } from "../../hooks/usePosts";

export const CommentsContainer = ({ postId }) => {
  const { data, isLoading, isError, error } = useGetPosts("comments");
  const { mutate: addPost } = useAddPost();
  console.log(postId);

  const handleAddComment = (data) => {
    console.log("Comment data to add:", { ...data, postId });
    addPost({ collectionName: "comments", data: { ...data, postId } });
  };

  const filterdComments = data?.filter((comment) => comment.postId === postId);
  return (
    <Comments
      data={filterdComments}
      isLoading={isLoading}
      isError={isError}
      error={error}
      handleAddComment={handleAddComment}
    />
  );
};
