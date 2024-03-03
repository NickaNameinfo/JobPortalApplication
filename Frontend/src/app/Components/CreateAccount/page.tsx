"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { infoData } from "../../../../configData";
const CreateAccount = () => {
  const router = useRouter();
  const {
    handleSubmit: handleSubmit,
    control: controlLogin,
    formState: { errors: errorsLogin },
  } = useForm();
  const [localUserName, setCompanyName] = React.useState(
    localStorage.getItem("userName")
  );
  const [otpValue, setOtpValue] = React.useState(null);
  const [oldOtp, setOldOtp] = React.useState(null);

  console.log(otpValue, oldOtp);

  React.useEffect(() => {
    // let localUserName = localStorage.getItem("userName");
    console.log(localUserName, "sdfas");
    if (localUserName) {
      router.back();
    }
  }, []);

  const onSubmit = async (formData) => {
    if (!otpValue) {
      try {
        const response = await axios.post(
          `${infoData?.baseApi}/customers/number/${formData?.phoneNumber}`,
          formData
        );
        if (response?.data) {
          alert("Otp sent your registered Phone Number");
          setOldOtp(response?.data);
        }
        console.log(formData, "formData32134", response);
      } catch (error) {
        alert("Somthis want worng");
      }
    } else {
      if (String(oldOtp?.data) === String(otpValue)) {
        try {
          let tempData = {
            ...formData,
            userName: formData?.phoneNumber,
            password: formData?.phoneNumber,
          };
          let result = await axios.post(
            `${infoData?.baseApi}/customers`,
            tempData
          );
          console.log(result, "asdfasd");
          localStorage.setItem("userName", result?.["data"]?.data?.userName);
          localStorage.setItem("userID", result?.["data"]?.data?.id);
          location.reload();
          router.push("/");
        } catch (error) {
          if (error.response) {
            alert(error.response.data?.message);
          }
        }
      } else {
        alert("Please check your otp");
      }
    }
  };

  return (
    <div>
      <div className="create-account-area login-area">
        <div className="container">
          <div className="create-photo">
            <div className="text-center mb-2">
              <img src="/Images/logo.png" alt="" width={150} />
              <div>
                <span>Already create an account?</span>
                <Link href="/Components/Login">Sign In </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className="create-photo-item text-center">
                    <h5>Ready to take the next step?</h5>
                    <p>Create an account or sign in.</p>
                    <div className="create-photo-right">
                      <div className="form-group">
                        <Controller
                          name="firstName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Frist Name"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.firstName?.type === "required"
                            ? "Frist is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="lastName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Last Name "
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.lastName?.type === "required"
                            ? "Last Name is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="email"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter email"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.email?.type === "required"
                            ? "Email is required"
                            : null}
                        </p>
                      </div>
                      <div className="form-group">
                        <Controller
                          name="phoneNumber"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Number"
                              {...field}
                            />
                          )}
                        />
                        <p className="error">
                          {errorsLogin.phoneNumber?.type === "required"
                            ? "Number is required"
                            : null}
                        </p>
                      </div>
                      {/* <div className="form-group">
                        <Controller
                          name="userName"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="User Name"
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
                      <div className="form-group">
                        <Controller
                          name="password"
                          control={controlLogin}
                          rules={{ required: true }}
                          render={({ field }) => (
                            <input
                              type="text"
                              className="form-control"
                              placeholder="passowrd"
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
                      {oldOtp ? (
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Otp"
                            onChange={(e) => setOtpValue(e.target.value)}
                          />
                          <div className="text-right submitt">
                            <button
                              type="submit"
                              className="btn create-photo-btn"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-right submitt">
                          <button
                            type="submit"
                            className="btn create-photo-btn"
                          >
                            Send Otp
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
