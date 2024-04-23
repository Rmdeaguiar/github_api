import './styles.scss';
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className="container-header">
      <header>
        <h1>GitHub Finder</h1>
        <div className='icon-git'>
          <FaGithub size={28} />
        </div>
      </header>
    </div>
  );
}

export default Header;
