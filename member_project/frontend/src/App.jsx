import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Save from "./save";
import List from "./list";
import Header from "./Header";

function App() {
  return (
    <>
      <h2>App.jsx</h2>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/save" element={<Save />} />
          <Route path="/List" element={<List />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
