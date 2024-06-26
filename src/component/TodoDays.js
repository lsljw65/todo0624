// import dummy from "../db/data.json";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function TodoDays() {
  //   const [days, setDays] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:3001/days")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setDays(data);
  //       });
  //   }, []);
  const days = useFetch("http://localhost:3001/days");
  if (days.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/todoList/${day.day}`}>{day.day}일 차</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
