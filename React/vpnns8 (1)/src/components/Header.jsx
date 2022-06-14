import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header">
      <div>
        <a href="index.html" className="logo">
          <img src="public/images/logo.png" alt="" />
        </a>
        <ul id="navigation">
          <li className="selected">
            <span>
              <Link to="/">Home</Link>
            </span>
          </li>
          <li className="menu">
            <span>
              <Link to="/tercer">About</Link>
            </span>
          </li>
          <li className="menu">
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <span>
              <Link to="/contact">Reserva</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
