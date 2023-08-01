// import { Button, Image, Modal } from "react-bootstrap";

// import { AuthState } from "../../context/AuthProvider";

// const ProfileModal = ({ show, onHide }) => {
//   const { auth } = AuthState();

//   return (
//     <Modal
//       show={show}
//       onHide={onHide}
//       size="md"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Your profile
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div className="d-flex justify-content-center">
//           <Image
//             id="profileModal"
//             src={auth.profilePic}
//             alt="Profile image"
//             draggable="false"
//             roundedCircle
//           />
//         </div>
//         <h4 className="text-center mt-3">{auth.name}</h4>
//         <h4 className="text-center">Email: {auth.email}</h4>
//         <h4 className="text-center">Phone: {auth.contact}</h4>
//         <h4 className="text-center">address: {auth.address}</h4>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default ProfileModal;
import React from "react";
import { Button, Image, Modal } from "react-bootstrap";
import { AuthState } from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const ProfileModal = ({ show, onHide }) => {
  const { auth } = AuthState();
  const navigate = useNavigate();

  // Function to handle the click of the "Edit Account Details" button
  const handleEditAccountDetails = () => {
    // Navigate to the edit account details page
    navigate("/editAccount");
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <Image
            id="profileModal"
            src={auth.profilePic}
            alt="Profile image"
            draggable="false"
            roundedCircle
          />
        </div>
        <h4 className="text-center mt-3">{auth.name}</h4>
        <h4 className="text-center">Email: {auth.email}</h4>
        <h4 className="text-center">Phone: {auth.contact}</h4>
        <h4 className="text-center">Address: {auth.address}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
        {/* <Button onClick={handleEditAccountDetails}>
          Edit Account Details
        </Button> */}
         <Link to="/editAccount">
        <button onClick={handleEditAccountDetails}>Go to Account Page</button>
      </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileModal;
