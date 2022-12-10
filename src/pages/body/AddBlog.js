import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles-body.css";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);

  const blog = { title, author, content };
  const navigate = useNavigate();

  const handleClick = () => {
    setIsPending(true);

    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      navigate("/home");
    }); //redirect
  };

  return (
    <div className="primary-body">
      <div className="author">
        <label htmlFor="author">Author: </label>
        <input
          typeof="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="title">
        <label htmlFor="title">Title: </label>
        <input
          typeof="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="content">
        <label htmlFor="Content">Content: </label>
        <textarea
          typeof="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      {!isPending && (
        <button className="btn" onClick={handleClick}>
          Add Blog
        </button>
      )}
      {isPending && <button className="btn"> Content is adding... </button>}
    </div>
  );
}

export default AddBlog;
