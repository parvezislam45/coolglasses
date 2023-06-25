import "./App.css";
import { Route, Routes } from "react-router-dom";
import Express from "./Components/Express";
import AllOrder from "./Components/AllOrder";
import Regular from "./Components/Regular";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/"element={<AllOrder/>}></Route>
        <Route path="/express"element={<Express/>}></Route>
        <Route path="/regular"element={<Regular/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
