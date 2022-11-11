import {Link} from "react-router-dom";

const Navbar = () => {
    return (
      <div className="Navbar">
        <Link to="/">HOME</Link> - 
        <Link to="/about">ABOUT</Link> - 
        <Link to="/login">LOGIN</Link>
      </div>
    );
  }
  
  export default Navbar;
  