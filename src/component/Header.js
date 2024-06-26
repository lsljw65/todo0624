import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">Todo List</Link>
      </h1>
      <div className="menu">
        <Link to="create_list" className="link">
          할 일 추가
        </Link>
        <Link to="create_day" className="link">
          day 추가
        </Link>
      </div>
    </div>
  );
}
