import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Details = () => {
    const history =useNavigate();
    history("/")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginData, setLogindata] = useState([]);
  var todayDate = new Date().toISOString().slice(0, 10);
  const Birthday = () => {
    const getUser = localStorage.getItem("user_login");
    if (getUser && getUser.length) {
      const user = JSON.parse(getUser);
      setLogindata(user);
    }
    const userBirth = loginData.map((el, k) => {
      return el.date === todayDate;
    });
    if (userBirth) {
      setTimeout(() => {
        handleShow();
      }, 3000);
    }
  };
  useEffect(() => {
    Birthday;
  }, []);
  const userLogout= ()=>{
    localStorage.removeItem("user_login")
  }

  return (
    <>
      {loginData.length === 0 ? (
        "error"
      ) : (
        <>
          <h1>Details page</h1>
          <h1>{loginData[0].name}</h1>
          <button onClick={userLogout}>LogOut</button>
          
          {loginData[0].date === todayDate ? (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{loginData[0].name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Wish you many many Happy return of the day
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default Details;
