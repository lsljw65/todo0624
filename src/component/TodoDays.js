import dummy from "../db/data.json";
import { Link } from "react-router-dom";
export default function TodoDays() {
  return (
    <div>
      <ul className="list_day">
        {dummy.days.map((day) => (
          <li key={day.id}>
            <Link to={`/todoList/${day.day}`}>{day.day}일 차</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
