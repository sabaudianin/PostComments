import { PostFilter } from "./PostFilter";
import { useGetPosts } from "../../hooks/usePosts";
import { LoadingPost } from "./LoadingPost";
import { ErrorPost } from "./ErrorPost";

export const PostsWrapper = () => {
  const { data, isLoading, isError, error } = useGetPosts("posts");

  if (isLoading) return <LoadingPost />;
  if (isError) return <ErrorPost error={error} />;

  return <PostFilter data={data} />;
};
