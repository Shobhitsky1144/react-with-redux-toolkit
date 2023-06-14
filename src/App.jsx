import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/counterSlice.js";
function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({ id: null, todo: "", isDone: false });
  const todos = useSelector((state) => state.counter.todos);
  const handleChange = (e) => {
    setTodo({ id: todos.length, todo: e.target.value, isDone: false });
  };

  // useEffect(() => {}, [dispatch]);

  return (
    <>
      <h1>CRUD OPERATION</h1>
      {console.log(todos)}
      <input type="text" value={todo.todo} onChange={handleChange} />
      <button onClick={() => dispatch(addTodo(todo))}>ADD</button>

      {todos.map((elem) => (
        <div key={elem.id}>
          <h2>{elem.todo}</h2>
          <button onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button>
          <button onClick={() => dispatch(deleteTodo(elem.id))}>Edit</button>
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
