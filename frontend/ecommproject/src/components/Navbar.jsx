import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
initMDB({ Dropdown, Collapse });
import React from "react";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  const handleNavTabClick = () => {
    navigate("/home/vendor-deshboard");
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: 0 }}>
      <div className="container-fluid">
        <button 
          className="navbar-toggler px-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarExampleOnHover" 
          aria-controls="navbarExampleOnHover" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarExampleOnHover">
          <ul className="navbar-nav me-auto ps-lg-0" style={{ paddingLeft: '0.15rem' }}>
            <li className="nav-item">
              <a className="nav-link" href="#">Regular link</a>
            </li>
            
            <li className="nav-item dropdown position-static">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="navbarDropdown" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Mega menu
              </a>
              <div className="dropdown-menu w-100 mt-0" aria-labelledby="navbarDropdown" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
                <div className="container">
                  <div className="row my-4">
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action">Lorem ipsum</a>
                        <a href="#" className="list-group-item list-group-item-action">Dolor sit</a>
                        <a href="#" className="list-group-item list-group-item-action">Amet consectetur</a>
                        <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
                        <a href="#" className="list-group-item list-group-item-action">Adipisicing elit</a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                      <div className="list-group list-group-flush">
                        <a href="#" className="list-group-item list-group-item-action">Explicabo voluptas</a>
                        <a href="#" className="list-group-item list-group-item-action">Perspiciatis quo</a>
                        <a href="#" className="list-group-item list-group-item-action">Cras justo odio</a>
                        <a href="#" className="list-group-item list-group-item-action">Laudantium maiores</a>
                        <a href="#" className="list-group-item list-group-item-action">Provident dolor</a>
                      </div>
                    </div>
                   
                    
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a className="nav-link"  onClick={handleNavTabClick}>Vendor</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      {/* <style>{`
        .nav-item {
          padding: 0.5rem 0xp;
          color: red;
        }
        
        .dropdown-hover:hover>.dropdown-menu {
        display: inline-block;
        }
        
        .dropdown-hover>.dropdown-toggle:active {
        
        pointer-events: none;
        }
      `}</style> */}
    </>
  );
};

export default Navbar;
