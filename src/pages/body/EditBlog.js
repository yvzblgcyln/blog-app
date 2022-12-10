import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./styles-body.css";

function EditBlog() {
  const location = useLocation();
  const { from } = location.state;

  const navigate = useNavigate(); //redirect

  const [title, setTitle] = useState(from.title);
  const [author, setAuthor] = useState(from.author);
  const [content, setContent] = useState(from.content);
  const [isPending, setIsPending] = useState(false);

  const handleClick = () => {
    setIsPending(true);

    fetch("http://localhost:8000/blog/" + from.id, {
      method: "PUT",
      body: JSON.stringify({
        id: from.id,
        title: title,
        content: content,
        author: author,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
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
          Update Blog {isPending}
        </button>
      )}
      {isPending && (
        <button className="btn"> Content is updating... {isPending}</button>
      )}
    </div>
  );
}

export default EditBlog;
