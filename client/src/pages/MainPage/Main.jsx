// import React from 'react';
// import { useState } from "react";
// import {
//   Container,
//   Dropdown,
//   DropdownButton,
//   Image,
//   Nav,
//   Navbar,
// } from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthState } from "../../context/AuthProvider";
// import ProfileModal from "../../components/ProfileModal/ProfileModal";
// import './Main.css';

// const Main = () => {
//   const [modalShow, setModalShow] = useState(false);

//   const navigate = useNavigate();
//   const { auth, setAuth } = AuthState();

//   const logoutHandler = () => {
//     localStorage.removeItem("auth");
//     setAuth(null);
//     return navigate("/login");
//   };
//   return (
//     <div className="App">
//       <aside className="sidemenu">
//         <div className="side-menu-button">
//           <span>+</span>
//           New Chat
//         </div>
//         <div>
//         <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
//       <Container>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />

//         <Navbar.Collapse className="justify-content-end">
//           {auth ? (
//             <DropdownButton
//               variant=""
//               align="end"
//               title={
//                 <Image
//                   id="profileDropdownIcon"
//                   src={auth.profilePic}
//                   alt="Navbar profile image"
//                   roundedCircle
//                 />
//               }
//             >
//               <Dropdown.Item as="button" onClick={() => setModalShow(true)}>
//                 Profile
//               </Dropdown.Item>
//               <ProfileModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//               />

//               <Dropdown.Divider />

//               <Dropdown.Item as="button" onClick={logoutHandler}>
//                 Log out
//               </Dropdown.Item>
//             </DropdownButton>
//           ) : (
//             <Nav.Item>
//               {/* <button
//                 className="nav-button me-2"
//                 onClick={() => navigate("/login")}
//               >
//                 Log in
//               </button>
//               <button
//                 className="nav-button"
//                 onClick={() => navigate("/register")}
//               >
//                 Register
//               </button> */}
//               <Link to="/Main">
//               <button 
//                 className="nav-button">Home</button>
//               </Link>
//             </Nav.Item>
//           )}
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//         </div>
//       </aside>
//       <section className="chatbox">
//         <div className="chat-input-holder">
//           <textarea className="text-area"></textarea>
//         </div>
//         <div className="chat-log">
//           <div className="chat-message">
//             <div className="chat-message-center">
//               <div className="avatar"></div>
//               <div className="message">hello</div>
//             </div>
//           </div>
//           <div className="chat-message chat-gpt">
//             <div className="chat-message-center">
//               <div className="avatar chat-gpt"></div>
//               <div className="message">I am AI</div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Main;
import React from 'react';
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
import { AuthState } from "../../context/AuthProvider";
import ProfileModal from "../../components/ProfileModal/ProfileModal";
import './Main.css';

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const [isTextAreaReadOnly, setIsTextAreaReadOnly] = useState(true);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem("auth");
    setAuth(null);
    return navigate("/login");
  };

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
        <div>
          <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
            <Container>
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
                    <Link to="/Main">
                      <button className="nav-button">Home</button>
                    </Link>
                  </Nav.Item>
                )}
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-input-holder">
          {/* Add the readOnly attribute to disable typing */}
          <textarea
            className="text-area"
            readOnly={isTextAreaReadOnly}
          ></textarea>
        </div>
        <div className="chat-log">
          {/* ... */}
        </div>
      </section>
    </div>
  );
};

export default Main;

