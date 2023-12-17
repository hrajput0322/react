import { useContext, useRef } from "react";
import { PostList as PostListData } from "../store/postListStore";

const CreatePost = () => {
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const {addPost} = useContext(PostListData);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "" 
    tagsElement.current.value = [];

    addPost(userId, title, body, reactions, tags);
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="row mb-3">
        <label htmlFor="userId" className="col-sm-2 col-form-label">
          User ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            ref={userIdElement}
            id="userId"
            placeholder="enter your user Id here"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="title" className="col-sm-2 col-form-label">
          Post Title
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            ref={titleElement}
            id="title"
            placeholder="enter post title"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="body" className="col-sm-2 col-form-label">
          Post Content 
        </label>
        <div className="col-sm-10">
          <textarea rows={4}
            type="text"
            className="form-control"
            ref={bodyElement}
            id="body"
            placeholder="enter post here"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="reactions" className="col-sm-2 col-form-label">
          Number of Reactions
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            ref={reactionsElement}
            id="reactions"
            placeholder="enter number of reactions"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="tags" className="col-sm-2 col-form-label">
          Tags
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            ref={tagsElement}
            id="tags"
            placeholder="enter tags for this post"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
