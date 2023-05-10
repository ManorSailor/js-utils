import { Link } from 'react-router-dom';

function Navbar() {
  const navLinkStyles = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-around',
  };

  return (
    <nav>
      <ul style={navLinkStyles}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/doesnot">Nothing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
