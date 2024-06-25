import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Todo List</Link>
      </h1>
      <div className="menu">
        <a href="#x" className="link">
          할 일 추가
        </a>
        <a href="#x" className="link">
          day 추가
        </a>
      </div>
    </div>
  );
}
