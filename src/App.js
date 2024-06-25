import "./App.css";
import EmptyPage from "./component/EmptyPage";
import Header from "./component/Header";
import TodoDayList from "./component/TodoDayList";
import TodoDays from "./component/TodoDays";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<TodoDays />} />
          <Route path="/todoList/:day" element={<TodoDayList />} />
          <Route path="/*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
