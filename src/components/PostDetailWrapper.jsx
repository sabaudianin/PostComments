import { useParams } from "react-router-dom";
import { PostDetails } from "./PostDetails";

export const PostsDetailWrapper = () => {
  const { id } = useParams();
  console.log(id);
  return <PostDetails postId={id} />;
};
