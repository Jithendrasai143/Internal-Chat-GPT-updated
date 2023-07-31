
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Spinner } from "react-bootstrap";
import { AuthState } from "../../context/AuthProvider";


const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false); // To track if registration is successful

  const navigate = useNavigate();
  const { setAuth } = AuthState();

  const handleCredentials = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // If any field is missing
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.phone ||
      !credentials.address ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      setIsLoading(false);
      setAlertMessage("Please fill all the fields");
      return;
    }

    // If password and confirm password don't match
    if (credentials.password !== credentials.confirmPassword) {
      setIsLoading(false);
      setAlertMessage("Passwords do not match");
      return;
    }

    // If password is less than 8 characters
    if (credentials.password.length < 8) {
      setIsLoading(false);
      setAlertMessage("Password must be at least 8 characters");
      return;
    }

    try {
      // Register user
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: credentials.name,
          email: credentials.email,
          phone: credentials.phone,
          address: credentials.address,
          password: credentials.password,
        }),
      });
      const data = await response.json();

      if (data.success) {
        setIsRegistered(true); // Set the flag to true if registration is successful
        setIsLoading(false);
        setAlertMessage("Your account has been successfully created");
        setCredentials({
          name: "",
          email: "",
          phone: "",
          address: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setIsLoading(false);
        setAlertMessage(data.error);
      }
    } catch (error) {
      setIsLoading(false);
      setAlertMessage("Internal server error");
    }
  };

  const clearAlert = () => {
    setAlertMessage("");
  };

  // Effect to navigate after successful registration
  useEffect(() => {
    let redirectTimer;

    if (isRegistered) {
      redirectTimer = setTimeout(() => {
        setIsRegistered(false);
        setAlertMessage("");
        navigate("/"); // Redirect to the desired page (e.g., home page) after 3 seconds
      }, 3000);
    }

    return () => clearTimeout(redirectTimer);
  }, [isRegistered, navigate]);

  return (
    <Form className="auth__form" onSubmit={registerHandler}>
      <h2 className="text-center mb-5">Create new account</h2>
      {alertMessage && (
        <div
          className={`alert alert-${
            isRegistered ? "success" : "danger"
          }`}
          onClick={clearAlert}
        >
          {alertMessage}
        </div>
      )}
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          tabIndex="1"
          placeholder="Full name"
          value={credentials.name}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          tabIndex="2"
          placeholder="Enter email"
          value={credentials.email}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          tabIndex="3"
          placeholder="Phone number"
          value={credentials.phone}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          tabIndex="4"
          placeholder="Address"
          value={credentials.address}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password must be 8 characters</Form.Label>
        <Form.Control
          type="password"
          name="password"
          tabIndex="5"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          tabIndex="6"
          placeholder="Confirm password"
          value={credentials.confirmPassword}
          onChange={(e) => handleCredentials(e)}
        />
      </Form.Group>
      <Button
        tabIndex="7"
        variant="success"
        type="submit"
        className="mb-3"
        disabled={isLoading}
      >
        {isLoading ? (
          <Spinner animation="border" role="status" size="sm" />
        ) : (
          "Create Account"
        )}
      </Button>

      <Form.Group className="mb-3 text-center" controlId="register">
        <span>
          Already have an account?&nbsp;
          <Link to="/login" tabIndex="8" className="text-decoration-none">
            Log in
          </Link>
        </span>
      </Form.Group>
    </Form>
  );
};

export default RegisterPage;


