import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import TaskList from "./pages/TaskList"
import AddTask from "./pages/AddTask"

function App() {

  return (
    <>
      <BrowserRouter>
        <nav style={{ padding: "2rem", textAlign: "right" }}>
          <NavLink to="/" style={{ margin: "0.75rem", color: "black", textDecoration: "none" }}>
            Home
          </NavLink>
          <NavLink to="/task-list" style={{ margin: "0.75rem", color: "black", textDecoration: "none" }}>
            Lista Task
          </NavLink>
          <NavLink to="/add-task" style={{ margin: "0.75rem", color: "black", textDecoration: "none" }}>
            Aggiungi Task
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/task-list" element={<TaskList />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
