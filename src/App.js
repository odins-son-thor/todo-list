import "./styles.css";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="App">
      <Navbar title="Todo list" route="home" />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happened!</h2>
      <TodoList />
    </div>
  );
}
