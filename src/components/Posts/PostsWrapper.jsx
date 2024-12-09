import { useParams } from "react-router-dom";
import { PostList } from "./PostList";
import { useGetPosts } from "../../hooks/usePosts";

export const PostsWrapper = () => {
  const { data, isLoading, isError, error } = useGetPosts("posts");
  const { id } = useParams();
  console.log(id);

  const handleAddPost = (data) => {
    addPost({ collectionName: "posts", data });
  };

  return (
    <PostList
      id={id}
      data={data}
      isLoading={isLoading}
      isError={isError}
      error={error}
      handleAddPost={handleAddPost}
    />
  );
};
