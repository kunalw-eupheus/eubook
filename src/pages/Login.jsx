import React, { useState } from "react";
import Button from "@mui/material/Button";
import eupheus_logo from "../../src/assets/eupheus_logo.png";
import LoginCover from "../assets/LoginCover.png";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import Cookies from "js-cookie";
import localinstance from "../localinstance";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const admin = useSelector((state) => state.auth.admin);
  const isAuth = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Useremail, password);

    const res = await localinstance({
      url: "auth/signin",
      method: "post",
      data: {
        userId: Useremail,
        password: password,
      },
    });

    console.log(res.data.id);
    console.log(res.data.role);

    if (res.data.id && res.data.token) {
      Cookies.set("id", `${res.data.id}`);
      Cookies.set("token", `${res.data.token}`);
      Cookies.set("role", `${res.data.role}`);

      if (res.data.role === "Admin") {
        Cookies.set("admin", true);
        Cookies.set("user", "");
        dispatch(authActions.adminLogin());
        // Cookies.set("user", "");
        navigate("/admin/dashboard");
      }

      if (res.data.role === "User") {
        Cookies.set("user", true);
        Cookies.set("admin", "");
        dispatch(authActions.login());
        // Cookies.set("admin", "");
        navigate("/user");
      }
    }
    setUseremail("");
    setPassword("");
    // Cookies.set("id", "");
    // Cookies.set("token", "");
    // Cookies.set("role", "");
    // Cookies.set("user", "");
    // Cookies.set("admin", "");
  };

  return (
    <div className="flex justify-between">
      <div>
        <img src={LoginCover}></img>
      </div>
      <div
        className="flex  flex-col  h-screen   p-5 w-[30vw] rounded-lg  "
        style={{ "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px" }}
      >
        <div className="flex justify-center mb-[10vh]">
          <img src={eupheus_logo} className=" w-[280px]" alt="img"></img>
        </div>
        <h3 className=" text-[2.5rem] font-semibold text-center mb-[5vh]">
          Login to Continue
        </h3>
        <div className="formGroup flex-col flex p-5 ml-10 ">
          <div className="flex flex-col !justify-start !items-start mb-[3vh]">
            <label htmlFor="" className=" text-lg font-semibold ">
              User email
            </label>
            <input
              type="text"
              value={Useremail}
              className="p-3 border rounded-lg shadow-md w-full "
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          <div className="flex flex-col !justify-start !items-start mb-[3vh]">
            <label htmlFor="" className=" text-lg font-semibold ">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="p-3 border rounded-lg shadow-md w-full "
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col !justify-start !items-start mb-[3vh]">
            <Button
              type="reset"
              className=" w-full shadow-xl rounded-xl "
              variant="contained"
              sx={{ padding: "10px" }}
              onClick={handleSubmit}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
