import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = React.useState(false);
  return (
    <div className="Header">
      <img src={Logo} className="logo" alt="" srcset="" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            srcset=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setMenuOpened(false)}>
            <Link
          onClick={() => setMenuOpened(false)}
          to='home'
          spy={true}
          smooth={true}
          activeClass="active"
            >Home</Link>
          </li>
          <li >
            <Link
            
          onClick={() => setMenuOpened(false)}
          to='Programs'
          spy={true}
          smooth={true}
            >
            Programs
            </Link>
            </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
          to='Reasons'
          spy={true}
          smooth={true}
            >Why Us</Link>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <Link
            onClick={() => setMenuOpened(false)}
          to='Plans'
          spy={true}
          smooth={true}
            >Plans</Link>
          </li>
          <li ><Link
          onClick={() => setMenuOpened(false)}
          to='Testimonials'
          spy={true}
          smooth={true}
          >Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
