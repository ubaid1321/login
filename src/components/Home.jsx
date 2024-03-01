import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Signimg from "./Signimg";
import { NavLink } from "react-router-dom";


const Home = () => {
  const [inpVal, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const [data,setData] = useState([])
 

  const getdata = (e) => {
    // console.log(e.target.value)

    const { value, name } = e.target;
    // console.log(value,name);

    setInpval(() => {
      return {
        ...inpVal,
        [name]: value,
      };
    });
  };
  const addData = (e) => {
    e.preventDefault();
  
  const { name, email, date, password } = inpVal;
  if (name === "") {
    alert("name field is required");
  } else if (email === "") {
    alert("email field is required");
  } else if (!email.includes("@")) {
    alert("please enter valid email address");
  } else if (date === "") {
    alert("date field is required");
  } else if (password === "") {
    alert("password filed is required");
  } else if (password.length < 5) {
    alert("password length should be greater than five");
  } else {
    localStorage.setItem("useryoutube",JSON.stringify([...data,inpVal]));
  }

}
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  onChange={getdata}
                  name="name"
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  onChange={getdata}
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control onChange={getdata} name="date" type="date" />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  onChange={getdata}
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                onClick={addData}
                variant="primary"
                className="col-lg-6"
                style={{ background: "rgb(67, 185, 127)" }}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already Have an Account <span> <NavLink to="/login"> SignIn</NavLink> </span>
            </p>
          </div>
          <Signimg />
        </section>
      </div>
    </>
  );
};

export default Home;
