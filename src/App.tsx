import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}

export default App;
