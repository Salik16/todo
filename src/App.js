import { Route, Routes } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import ListProduct from "./components/ListProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/list" element={<ListProduct />} />
      </Routes>
    </div>
  );
}

export default App;
