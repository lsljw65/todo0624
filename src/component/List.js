import { useState } from "react";

export default function List({ todo }) {
  const [isShow, setIsShow] = useState(true);
  const [isDone, setIsDone] = useState(todo.isDone);

  function toggleShow() {
    setIsShow(!isShow);
  }

  function toggleDone() {
    setIsDone(!isDone);
  }

  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>
      <td>{isShow && todo.title}</td>
      <td>
        <button onClick={toggleShow}>{isShow ? "수정" : "완료"}</button>
        <button className="btn_del">삭제</button>
      </td>
    </tr>
  );
}
