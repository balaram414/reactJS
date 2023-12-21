import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Curd from "./components/curd";
import Todo from "./components/todo";
import NoMatch from "./components/notmatch";
function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>
            Home
          </Link>
          <Link to="/about" style={{ padding: 5 }}>
            About
          </Link>
          <Link to="/todo" style={{ padding: 5 }}>
            Todo
          </Link>
          <Link to="/curd" style={{ padding: 5 }}>
            CURD operation
          </Link>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/curd" element={<Curd />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
