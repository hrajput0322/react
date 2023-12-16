import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/postListStore";

const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.length > 0 ? (
        postList.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <p className="no-post">No posts available</p>
      )}
    </>
  );
};

export default PostList;
