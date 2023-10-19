"use client"
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useAuth } from "../auth/login";

const Header = () => {
  const [show, setShow] = useState(false);
  const [domain, setDomain] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [inputError, setInputError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginBtnVisible, setLoginBtnVisible] = useState(true);
  const [userName, setUserName] = useState("");

  const handleClose = () => setShow(false);

  const auth = useAuth();

  const signIn = async (username, tokenid) => {
    const regex = /\.mmit$/;
    if (!regex.test(domain) || !domain || !tokenId) {
      setInputError("Please fill all the fields");
      return;
    }
    setLoading(true);
    let response;
    try {
      response = await axios.get(`/api/sdk`, {
        params: {
          username: username,
          id: tokenid
        }
      });
    } catch (error) {
      console.error(error);
    }
    const uservalidator = response?.data?.data
    if (uservalidator.success == true) {
      setLoginBtnVisible(false);
      const user = domain.slice(0, -5);
      setUserName("welcome " + user)
      handleClose()
      setLoading(false);
    }
    else {
      setInputError(uservalidator.message);
      setLoading(false);
    }
  };

  const onSubmit = async () => {
    auth.login({ domain, tokenId });
    signIn(domain, tokenId)
  };



  const handleShow = () => setShow(true);

  const logOutUser = () => {
    setUserName("")
    setLoginBtnVisible(true);
    setDomain("");
    setTokenId("");
  };

  return (
    <div className="HeaderContainer">
      <div className="mainContentForHeader">
        <div className="textContainer">
          <b className="font-set">Game of NFTs </b>
          <span className="font-set"> is now </span>
          <b className="font-set"> Live! </b>
          <b className="font-set mx-4">{userName}</b>
          {loginBtnVisible ? (
            <Button
              className="btn btn-secondary mx-2 btn-sm"
              onClick={handleShow}
            >
              Login With MMIT Domain
            </Button>
          ) : (
            <>
              <Button
                className="btn btn-secondary mx-2 btn-sm"
                onClick={logOutUser}
              >
                LogOut
              </Button>
            </>
          )}
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Insert Your MMIT Domain</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="text"
                      placeholder="Domain"
                      onChange={(e) => {
                        setDomain(e.target.value);
                        setInputError("");
                      }}
                    />
                    <p className="text-danger">{inputError}</p>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="number"
                      placeholder="Token Id"
                      onChange={(e) => {
                        setTokenId(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="light" onClick={onSubmit}>
                  Login
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
