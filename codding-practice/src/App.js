import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Curd from "./components/curd";
import Todo from "./components/todo";
import CustomHook from './components/customHook'
import NoMatch from "./components/notmatch";
import ForwordRef from "./components/ForwordRef";
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
          <Link to="/openFolder" style={{ padding: 5 }}>
          Open Folder
          </Link>
          <Link to="/dropdown" style={{ padding: 5 }}>
          Dropdown List
          </Link>
          <Link to="/forwordRef" style={{ padding: 5 }}>
          Forword Ref
          </Link>
          <Link to="/hoc" style={{ padding: 5 }}>
          HOC
          </Link>
          <Link to="/customHook" style={{ padding: 5 }}>
          Custom Hook
          </Link>
          
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/curd" element={<Curd />} />
          <Route path="/forwordRef" element={<ForwordRef />} />
          <Route path="/customHook" element={<CustomHook />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
