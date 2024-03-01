import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Signimg from "./Signimg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const history = useNavigate();
    const [inpVal, setInpval] = useState({
        email: "",
        password: ""
      });
      const [data,setData] = useState([])
      console.log(inpVal);
    
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
        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr)
      
      const {  email, password } = inpVal;
      
       if (email === "") {
        alert("email field is required");
      } else if (!email.includes("@")) {
        alert("please enter valid email address");
      } else if(password===""){
        alert("password filedis required")
      }
      else if (password.length < 5) {
        alert("password length should be greater than five");
      } else {
        if (getuserArr && getuserArr.length){
            const userData=JSON.parse(getuserArr)
            const userLogin = userData.filter((el,k)=>{
                return el.email === email && el.password
            })
            console.log(userLogin)
            if(userLogin.length=== 0){
                alert("invlaid email or password")
            }else {
                console.log("user login successfull")
                localStorage.setItem("user_login",JSON.stringify(getuserArr))
                history("/details")
            }
        }
      }
    }
  return (
    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign In</h3>
          <Form>
            <Form.Group
              className="mb-3 col-lg-6"
              controlId="formBasicEmail"
            ></Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                onChange={getdata}
                name="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
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
            Already Have an Account <span>SignIn</span>{" "}
          </p>
        </div>
        <Signimg />
      </section>
    </div>
  );
};

export default Login;
