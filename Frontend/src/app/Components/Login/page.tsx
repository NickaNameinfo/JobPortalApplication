import React from 'react'

const Login = () => {
    return (
        <div>


            <div className="login-area pt-30">
                <div className="container">
                    <div className="already-create mb15 text-center">
                        <img src="/Images/logo.png" alt="" />
                        {/* <span>Already create an account?</span> */}
                        {/* <a href="#">Sign In</a> */}
                    </div>
                    <div className="row">
                        <div className="col-sm-3" />
                        <div className="col-sm-6">
                            <div className="create-photo-item text-center">
                                <h2>Welcome !!!</h2>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Username"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                        />
                                    </div>
                                </form>
                                <div className="login-sign-in">
                                    <a href="forgot.php">Forgot Password?</a>
                                    <ul>
                                        <li>Don’t Have Account ?</li>
                                        <li>
                                            <a href="create-account.php">Sign Up Here</a>
                                        </li>
                                    </ul>
                                    <div className="text-center">
                                        <button type="submit" className="btn login-btn">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Login;