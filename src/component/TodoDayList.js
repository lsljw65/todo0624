import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import List from "./List";

export default function TodoDayList() {
  //   console.log(dummy);

  const a = useParams();
  const day = a.day;

  const todoList = dummy.todos.filter((todo) => todo.day === Number(day));
  return (
    <div>
      <h2>{day}일 차</h2>
      <table>
        <tbody>
          {todoList.map((todo) => (
            <List todo={todo} key={todo.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
