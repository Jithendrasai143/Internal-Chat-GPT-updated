import { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import IMAGES from "../../assets"; // Importing images from single "IMAGES" object
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../ProfileModal/ProfileModal";

 import "./NavigationBar.css";

const NavigationBar = () => {
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/login");
  };

  return (
    <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt="Advanced Node Authentication Logo"
            src={IMAGES.logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          &nbsp;INTERNAL CHAT-GPT
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="justify-content-end">
          {auth ? (
            <DropdownButton
              variant=""
              align="end"
              title={
                <Image
                  id="profileDropdownIcon"
                  src={auth.profilePic}
                  alt="Navbar profile image"
                  roundedCircle
                />
              }
            >
              <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
                Profile
              </Dropdown.Item>
              <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

              <Dropdown.Divider />

              <Dropdown.Item as="button" onClick={logoutHandler}>
                Log out
              </Dropdown.Item>
            </DropdownButton>
          ) : (
            <Nav.Item>
              <button
                className="nav-button me mt-3"
                onClick={() => navigate("/login")}
              >
                Log in
              </button>
              <button
                className="nav-button me mt-3"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
              <Link to="/Main">
              <button 
                className="nav-button me-2 mt-3">Home</button>
              </Link>
            </Nav.Item>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
