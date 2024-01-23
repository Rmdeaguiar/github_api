import './App.scss';
import { Outlet } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="container-app">
      <header>
        <h1>GitHub Finder</h1>
        <div className='icon-git'>
          <FaGithub size={28} />
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
