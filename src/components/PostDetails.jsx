import { useGetPostById } from "../hooks/usePosts";

export const PostDetails = ({ postId }) => {
  const { data: post, isLoading, isError, error } = useGetPostById(postId);
  if (isLoading) return <p> ...LOADING...</p>;
  if (isError) return <p> Error: {error.message}</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <strong>Created At:</strong> {post.createdAt}
      </p>
    </div>
  );
};
