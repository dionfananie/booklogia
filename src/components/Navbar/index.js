import logo from "../../assets/images/logo-text.png";
import profil from "../../assets/images/Forum/User.png";
import { Link } from "react-router-dom";
import {
  Container,
  Navbar as NavbarBootstrap,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Navbar() {
  const { isAuthorized, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <NavbarBootstrap
        bg="warning"
        variant="light"
        expand="lg"
        className="py-3"
      >
        <Container>
          <NavbarBootstrap.Brand>
            <Link to="/">
              <img alt="" src={logo} height="30" className="" />{" "}
            </Link>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link ms-lg-2 me-3">
                Home
              </Link>
              <Link to="/tips" className="nav-link me-3">
                Tips
              </Link>
              <Link to="/forum" className="nav-link me-3">
                Forum
              </Link>
            </Nav>
            <Nav className="align-items-center">
              {isAuthorized ? (
                <>
                  <img
                    alt=""
                    src={profil}
                    height="35"
                    className="bg-light rounded-circle"
                  />{" "}
                  <NavDropdown title={user.nama} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => dispatch(logout())}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link to="/login" className="me-lg-2 w-100 w-lg-auto mb-2 mb-lg-0">
                    <Button variant="outline-light" className="px-lg-4 py-lg-2 w-100 w-lg-auto">
                      Login
                    </Button>
                  </Link>

                  <span className="nav-link me-2 d-none d-lg-inline-block">or</span>

                  <Link to="/register" className="w-100 w-lg-auto">
                    <Button variant="orange" className="px-lg-4 py-lg-2 w-100 w-lg-auto text-light">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
}

export default Navbar;
