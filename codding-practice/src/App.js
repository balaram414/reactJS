import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Curd from "./components/curd";
import Todo from "./components/todo";
import CustomHook from "./components/customHook";
import NoMatch from "./components/notmatch";
import ForwordRef from "./components/ForwordRef";
import NestedRouting from "./components/NestedRouting";
import Search from "./components/Search";
import ContactList from "./components/ContactList";
import DropdownList from "./components/dropdownList";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div style={{background:"LightGray"}}>
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
          <Link to="/nestedRouting" style={{ padding: 5 }}>
            Nested Routing
          </Link>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/todo" element={<Todo />} />
          <Route path="/curd" element={<Curd />} />
          <Route path="/forwordRef" element={<ForwordRef />} />
          <Route path="/customHook" element={<CustomHook />} />
          <Route path="/dropdown" element={<DropdownList />} />
          <Route path="/nestedRouting" element={<NestedRouting />}></Route>
          <Route path="/nestedRouting/search" element={<Search />} />
          <Route path="/nestedRouting/contactList" element={<ContactList />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
      <h3>Parent components</h3>
      <button onClick={() => dispatch(increment())}>INC {count} --</button>
      <button onClick={() => dispatch(decrement())}>DEC {count} --</button>
    </div>
  );
}

export default App;
