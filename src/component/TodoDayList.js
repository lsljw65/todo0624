// import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import List from "./List";
import useFetch from "../hooks/useFetch";
// import { useEffect, useState } from "react";

export default function TodoDayList() {
  //   console.log(dummy);

  const a = useParams();
  const day = a.day;

  //   const todoList = dummy.todos.filter((todo) => todo.day === Number(day));
  //   const [todos, setTodos] = useState([]);

  //   useEffect(() => {
  //     fetch(`http://localhost:3001/todos?day=${day}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setTodos(data);
  //       });
  //   }, [day]);
  const todos = useFetch(`http://localhost:3001/todos?day=${day}`);
  if (todos.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <h2>{day}일 차</h2>
      <table>
        <tbody>
          {todos.map((todo) => (
            <List todo={todo} key={todo.id} day={day} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
