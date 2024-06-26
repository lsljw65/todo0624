import { useRef, useState } from "react";

import styles from "../css/ModifyTodo.module.css";
import { useNavigate } from "react-router-dom";

export default function List({ todo: _todo, day }) {
  const [todo, setTodo] = useState(_todo);
  const [isShow, setIsShow] = useState(true);
  const [isDone, setIsDone] = useState(todo.isDone);
  const history = useNavigate();
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
  const titleRef = useRef(null);

  //   console.log(day);
  function modify() {
    // console.log(day);
    fetch(`http://localhost:3001/todos/${todo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...todo,
        title: titleRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert(`수정이 완료되었습니다.`);
        history(`/todoList/${1}`);
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
      <td>
        {/* {isShow && todo.title} */}
        {isShow ? (
          todo.title
        ) : (
          <div className={styles.modify}>
            <input type="text" placeholder="할일을 입력하세요" ref={titleRef} />
            <button className={styles.btn_md}>수정 취소</button>
          </div>
        )}
      </td>
      <td>
        {/* {isShow ? <button>수정</button> : <button>완료</button>} */}
        <span onClick={toggleShow}>
          {isShow ? (
            <button>수정</button>
          ) : (
            <button onClick={modify}>완료</button>
          )}
        </span>
        <button className="btn_del" onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
}
