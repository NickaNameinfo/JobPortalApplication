"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { infoData } from "../../../../configData";

const Login = () => {
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const router = useRouter();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (localUserName) {
      router.back();
    }
  }, []);

  const onSubmit = async (formData) => {
    try {
      let tempData = {
        ...formData,
        password : formData?.userName
      }
      const response = await axios.post(
        `${infoData?.baseApi}/customers/authenticate`,
        tempData
      );
      console.log(formData, "formData32134", response);

      if (response.data.success && !response?.data?.data?.error) {
        localStorage.setItem("userName", response?.data?.data?.userName);
        localStorage.setItem("userID", response?.data?.data.id);
        location.reload();
        router.push("/Components/UserDashboard/UserProfile");
      } else {
        alert("User name or password is incorrect");
      }
    } catch (error) {
      alert("User name or password is incorrect");
    }
  };

  return (
    <div className="login-area">
      <div className="container">
        <div className="already-create mb15 text-center">
          <img src="/Images/logo.png" alt="" />
        </div>
        <div className="row">
          <div className="col-sm-3" />
          <div className="col-sm-6">
            <div className="create-photo-item text-center">
              <h2>Welcome !!!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <Controller
                    name="userName"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.userName?.type === "required"
                      ? "User Name is required"
                      : null}
                  </p>
                </div>
                {/* <div className="form-group">
                  <Controller
                    name="password"
                    control={controlLogin}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <input
                        type="text"
                        className="form-control"
                        placeholder="password"
                        {...field}
                      />
                    )}
                  />
                  <p className="error">
                    {errorsLogin.password?.type === "required"
                      ? "Password is required"
                      : null}
                  </p>
                </div> */}
                <div className="login-sign-in">
                  {/* <Link href="/Components/Forgot">Forgot Password?</Link> */}
                  <ul>
                    <li>Don’t Have Account ?</li>
                    <li>
                      <Link href="/Components/CreateAccount">Sign Up Here</Link>
                    </li>
                  </ul>
                  <div className="text-center">
                    <button type="submit" className="btn login-btn">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
