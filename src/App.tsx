import './App.css';
import { Outlet } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header>
        <h1>GitHub Finder</h1>
        <FaGithub size={30} />
      </header>
      <Outlet />
    </div>
  );
}

export default App;
