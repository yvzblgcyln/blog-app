import { Link } from "react-router-dom";
import "./styles-header.css";

function Navbar() {
  return (
    <div className="primary-header">
      <div className="page-title">YBC BLOG</div>
      <div>
        <Link to="/home"> Home -</Link>
        <Link to="/add"> AddBlog </Link>
      </div>
    </div>
  );
}

export default Navbar;
