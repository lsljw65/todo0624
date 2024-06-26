import { useState } from "react";

export default function List({ todo: _todo }) {
  const [todo, setTodo] = useState(_todo);
  const [isShow, setIsShow] = useState(true);
  const [isDone, setIsDone] = useState(todo.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
    console.log(todo.id);
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  }

  function del() {
    if (window.confirm("삭제하시겠습니까")) {
      fetch(`http://localhost:3001/todos/${todo.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setTodo({ id: 0 });
        }
      });
    }
  }
  if (todo.id === 0) {
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{isShow && todo.title}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "수정" : "완료"}</button>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
