import styles from "../css/ModifyTodo.module.css";
export default function ModifyTodo() {
  return (
    <div className={styles.modify}>
      <input type="text" placeholder="할일을 입력하세요" />
      <button className={styles.btn_md}>수정 취소</button>
    </div>
  );
}
