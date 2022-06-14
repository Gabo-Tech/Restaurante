import { Link } from "react-router-dom";

export default function Tercer() {
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
            <a href="about.html">About</a>
            <ul className="primary">
              <li>
                <a href="product.html">Product</a>
              </li>
            </ul>
          </li>
          <li className="menu">
            <a href="blog.html">Blog</a>
            <ul className="secondary">
              <li>
                <a href="singlepost.html">Single post</a>
              </li>
            </ul>
          </li>
          <li>
            <span>
              <Link to="/contact">Contacto</Link>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
