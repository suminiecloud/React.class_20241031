import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import Home from "./Home";
import Info from "../Info";
import Header from "./Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>App.jsx</h2>
      <browserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Info" element={<Info />} />
        </Routes>
      </browserRouter>
    </>
  );
}

export default App;
