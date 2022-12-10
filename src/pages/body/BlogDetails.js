import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../../components/useFetch";
import { useState } from "react";
import "./styles-body.css";

function Blogdetails() {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/blog/" + id
  );
  const navigate = useNavigate(); //redirect
  const [isButtonPending, setIsButtonPending] = useState(false);

  const hadleClick = () => {
    setIsButtonPending(true);

    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    }).then(() => navigate("/home")); //redirect
  };

  return (
    <div className="primary-body">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {data && (
        <div>
          <p>{data.title}</p>
          {data.content}
          <Link to="/edit" state={{ from: data }}>
            {" "}
            Edit
          </Link>
          <div>
            {!isButtonPending && (
              <button className="btn" onClick={hadleClick}>
                {" "}
                delete{" "}
              </button>
            )}
            {isButtonPending && (
              <button className="btn"> Content is deleting... </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogdetails;
