import { useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

export default function CreateList() {
  const days = useFetch("http://localhost:3001/days");
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate();

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading) {
      setIsLoading(true);
      fetch("http://localhost:3001/todos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: Number(dayRef.current.value),
          title: titleRef.current.value,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다.");
          history(`/todoList/${dayRef.current.value}`);
          setIsLoading(false);
        }
      });
    }
  }

  const dayRef = useRef(null);
  const titleRef = useRef(null);
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="input_area">
          <label>할일 입력</label>
          <input type="text" placeholder="할일을 입력하세요" ref={titleRef} />
        </div>
        <div className="input_area">
          <label>Day</label>
          <select ref={dayRef}>
            {days.map((day) => (
              <option key={day.id} value={day.day}>
                {day.day}
              </option>
            ))}
          </select>
        </div>
        <button
          style={{
            opacity: isLoading ? 0.3 : 1,
          }}
        >
          {isLoading ? "Saving..." : "저장"}
        </button>
      </form>
    </>
  );
}
