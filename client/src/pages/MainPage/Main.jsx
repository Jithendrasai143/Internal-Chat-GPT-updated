
// import React, { useState } from 'react';
// import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { AuthState } from '../../context/AuthProvider';
// import ProfileModal from '../../components/ProfileModal/ProfileModal';
// import './Main.css';

// const Main = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatLog, setChatLog] = useState([]);

//   const navigate = useNavigate();
//   const { auth, setAuth } = AuthState();

//   const logoutHandler = () => {
//     localStorage.removeItem('auth');
//     setAuth(null);
//     return navigate('/login');
//   };

//   const handleInputChange = (event) => {
//     setChatMessage(event.target.value);
//   };

//   const handleSendMessage = () => {
//     if (chatMessage.trim() !== '') {
//       const newMessage = {
//         message: chatMessage,
//         sender: 'user', // Assuming the user is sending the message here
//       };

//       // Adding the new message to the chat log
//       setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
//       setChatMessage(''); // Clearing the input after sending the message
//     }
//   };

//   return (
//     <div className="App">
      // <aside className="sidemenu">
      //   <div className="side-menu-button">
      //     <span>+</span>
      //     New Chat
      //   </div>
      //   <div>
      //     <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
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
      //               <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />

      //               <Dropdown.Divider />

      //               <Dropdown.Item as="button" onClick={logoutHandler}>
      //                 Log out
      //               </Dropdown.Item>
      //             </DropdownButton>
      //           ) : (
      //             <Nav.Item>
      //               <Link to="/Main">
      //                 <button className="nav-button">Home</button>
      //               </Link>
      //             </Nav.Item>
      //           )}
      //         </Navbar.Collapse>
      //       </Container>
      //     </Navbar>
      //   </div>
      // </aside>
//       <section className="chatbox">
//         <div className="chat-input-holder">
//           <textarea
//             className="text-area"
//             value={chatMessage}
//             onChange={handleInputChange}
//             placeholder="Type your message..."
//           ></textarea>
//           <button  className="absolute p-1 rounded-mmd md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white buttom-1.5 transistion-colors disabled:opacity-40"
//            style={{ backgroundColor: 'rgb(25, 195, 125)' }} onClick={handleSendMessage}>
//             Send
//           </button>
//         </div>
//         <div className="chat-log">
//           {chatLog.map((message, index) => (
//             <div key={index} className={`chat-message chat-${message.sender}`}>
//               <div className="chat-message-center">
//                 <div className="avatar"></div>
//                 <div className="message">{message.message}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Main;

import React, { useState } from 'react';
import { Container, Dropdown, DropdownButton, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthState } from '../../context/AuthProvider';
import ProfileModal from '../../components/ProfileModal/ProfileModal';
import './Main.css';

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const navigate = useNavigate();
  const { auth, setAuth } = AuthState();

  const logoutHandler = () => {
    localStorage.removeItem('auth');
    setAuth(null);
    return navigate('/login');
  };

  const handleInputChange = (event) => {
    setChatMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (chatMessage.trim() !== '') {
      const newMessage = {
        message: chatMessage,
        sender: 'user', // Assuming the user is sending the message here
      };

      // Adding the new message to the chat log
      setChatLog((prevChatLog) => [...prevChatLog, newMessage]);
      setChatMessage(''); // Clearing the input after sending the message
    }
  };

  return (
    <div className="App">
       <aside className="sidemenu">
        <div className="side-menu-button md-4">
          <span>+</span>
          New Chat
        </div>
        <div>
          <Navbar collapseOnSelect expand="md" variant="dark" id="nav">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav md" />

              <Navbar.Collapse className="justify-content-end">
                {auth ? (
                  <DropdownButton className='toggle'
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
                    <Dropdown.Item as="button" style={{"marginLeft":"60px"}} onClick={() => setModalShow(true)}>
                      Profile
                    </Dropdown.Item>
                    <ProfileModal show={modalShow} onHide={() => setModalShow(false)} />

                    <Dropdown.Divider />

                    <Dropdown.Item as="button" style={{"marginLeft":"60px"}} onClick={logoutHandler}>
                      Log out
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <Nav.Item>
                    <Link to="/Main">
                      <button className="nav-button mt-3">Home</button>
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
          <div className="chat-input-container">
            <textarea
              className="text-area"
              value={chatMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
            ></textarea>
            <button className="send-button" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
        <div className="chat-log">
          {chatLog.map((message, index) => (
            <div key={index} className={`chat-message chat-${message.sender}`}>
              <div className="chat-message-center">
                <div className="avatar"></div>
                <div className="message">{message.message}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Main;
