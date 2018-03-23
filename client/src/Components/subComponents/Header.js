import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import SearchBar from '../SearchBar'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


require("react-bootstrap/lib/NavbarHeader");

{/* <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href='#home'>APP-etite</a>
    </Navbar.Brand>
  </Navbar.Header>
<Nav>
  <NavItem eventKey={1} href="#">
My Account
</NavItem>
  <NavDropdown eventKey={2} title="MENU" id="basic-nav-dropdown">
    <MenuItem eventKey={2.1}>Favorites</MenuItem>
    <MenuItem eventKey={2.2}>Log Out </MenuItem>
  </NavDropdown>
</Nav>
</Navbar>; */}


//import { Button } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/main">
          Home
        </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/user/myreviews">
                My Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/favorites">
                My Favorites
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user/account">
                My Account
              </Link>
            </li>
          </ul>
        
      </nav>

    <SearchBar />
</div>

  );
};

export default Header;
