import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";
initMDB({ Dropdown, Collapse });
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler px-0"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-lg-0" href="#">
              <img
                src="./src/assets/logo.png"
                height="50"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>

            <ul
              className="navbar-nav me-auto ps-lg-0 mb-2 mb-lg-0"
              style={{ paddingLeft: "0.15rem" }}
            >
              <li className="nav-item dropdown position-static">
                <a
                  data-mdb-dropdown-init
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mega menu
                </a>
                <div
                  className="dropdown-menu w-100 mt-0"
                  aria-labelledby="navbarDropdown"
                  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                >
                  <div className="container">
                    <div className="row my-4">
                      <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                            Lorem ipsum
                          </p>
                          <a href="#" className="list-group-item list-group-item-action">
                            Dolor sit
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Amet consectetur
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Cras justo odio
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Adipisicing elit
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3 mb-lg-0">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                            Explicabo voluptas
                          </p>
                          <a href="#" className="list-group-item list-group-item-action">
                            Perspiciatis quo
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Cras justo odio
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Laudantium maiores
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Provident dolor
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3 mb-3 mb-md-0">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                            Iste quaerato
                          </p>
                          <a href="#" className="list-group-item list-group-item-action">
                            Cras justo odio
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Est iure
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Praesentium
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Laboriosam
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-3">
                        <div className="list-group list-group-flush">
                          <p className="mb-0 list-group-item text-uppercase font-weight-bold">
                            Cras justo odio
                          </p>
                          <a href="#" className="list-group-item list-group-item-action">
                            Saepe
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Vel alias
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Sunt doloribus
                          </a>
                          <a href="#" className="list-group-item list-group-item-action">
                            Cum dolores
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Woman
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Other
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="text-reset me-3 dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
                <span className="badge rounded-pill badge-notification bg-danger">
                  1
                </span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Some news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another news
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <a
                data-mdb-dropdown-init
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style>{`
        .navbar-nav .nav-item:hover .nav-link {
          color: #ED4424; /* Change text color to #ED4424 on hover */
        }
        .nav-item {
          padding: 0.5rem 0xp;
        }
        
        .dropdown-hover:hover>.dropdown-menu {
        display: inline-block;
        }
        
        .dropdown-hover>.dropdown-toggle:active {
        /*Without this, clicking will make it sticky*/
        pointer-events: none;
        }
      `}</style>
    </>
  );
};

export default Navbar;
