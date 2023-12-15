import { Link } from 'react-router-dom';
import './Navbar.css';
import TotalItems from '../CartContent/TotalItems';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={'/'}>
          <h1 className='navbar-logo'>Tienda</h1>
        </Link>
        <Link className='seecarrito' to='/cart'>
          🛒<TotalItems />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
