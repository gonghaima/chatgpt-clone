import { Link } from 'react-router-dom';
import './homepage.css';

const homepage = () => {
  return (
    <div className="homepage">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default homepage;
