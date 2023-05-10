import { Link, Route, Routes } from "react-router-dom";
import Count from "./components/Count";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <Link to="/list">List</Link>
      <Link to="/counter">Counter</Link>
      <Routes>
        <Route path="/list" element={<ListProduct />} />
        <Route path="/counter" element={<Count />} />
      </Routes>
    </div>
  );
}

export default App;
