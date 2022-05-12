import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Components/Home";
import View from "../src/Components/View";
import Edit from "../src/Components/Edit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
