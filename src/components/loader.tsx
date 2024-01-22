import { FaSpinner } from "react-icons/fa";
import './styles.scss';


const Loader = () => {
  return (
    <div className="loader">
      <FaSpinner />
    </div>
  );
};

export default Loader;