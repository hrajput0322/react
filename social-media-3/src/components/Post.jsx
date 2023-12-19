import PropTypes from "prop-types";
import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostList as PostListData } from "../store/postListStore";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListData);
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <RiDeleteBin5Fill />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {post.reactions}+ reactions
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Post;
