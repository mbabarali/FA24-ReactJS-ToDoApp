import "./App.css";
import TaskListProvider from "./store/TaskListProvider";
import Header from "./components/Header";
import Home from "./pages/Home";

// Stateful Functional Component
function App() {
  // Returning JSX code which is multiline or/and contains nested elements
  return (
    <TaskListProvider>
      <Header></Header>
      <div className="App">
        <h1>ToDo Application</h1>
        <Home />
      </div>
    </TaskListProvider>
  );
}

export default App;
