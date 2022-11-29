import React from "react";
import './Signup.css';
import { useFormik } from "formik";
import { signUpSchema } from "../../schema";

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const Signup = () => {

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    console.log(errors);


    return (
        <form onSubmit={handleSubmit}>
            <div className="signup-controls">
                <h1>Sign Up</h1>
                <span className="signup-alreadyUser">Already have an account ? <a className="login">Login</a> </span>
                <div className="signup-control">
                    <label className="label" for="name" > <b>Name</b> </label>
                    <br />
                    <input autoComplete="off" value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" id="name" name="name" placeholder="Enter your full name" required />
                    {errors.name && touched.name ? (<span className="signup-errors">{errors.name}</span>) : null}

                    <br />
                    <br />

                    <label className="label" id="email" for="email" > <b>&nbsp;Email</b> </label>
                    <br />
                    <input autoComplete="off" value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" id="email" name="email" placeholder="Enter your email" required />
                    {errors.email && touched.email ? (<span className="signup-errors">{errors.email}</span>) : null}

                    <br />
                    <br />

                    {/* <label className="label" for="phone"><b>Phone Number</b></label>
                    <div className="contactNumberdiv">
                        <br />
                        <select name="phoneCode" required>
                            <option selected hidden value="">Code</option>
                            <option value="66">+91</option>
                            <option value="66">+98</option>
                            <option value="66">+99</option>
                            <option value="66">+90</option>
                            <option value="66">+66</option>
                        </select>
                        <input type="number" minLength="10" name="phone" placeholder="eg: 812345678" required />
                    </div> */}
                    <label className="label" for="password" > <b>Password</b> </label>
                    <br />
                    <input autoComplete="off" value={values.password} onChange={handleChange} onBlur={handleBlur} type="password" id="password" name="password" placeholder="Type your password" required />
                    {errors.password && touched.password ? (<span className="signup-errors">{errors.password}</span>) : null}

                    <br />
                    <br />

                    <label className="label" for="confirmPassword" > <b>&nbsp;Confirm Password</b> </label>
                    <br />
                    <input autoComplete="off" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} type="password" id="confirmPassword" name="confirmPassword" placeholder="Retype your password" required />
                    {errors.confirmPassword && touched.confirmPassword ? (<span className="signup-errors">{errors.confirmPassword}</span>) : null}

                    <br />
                    <br />

                    <div>
                        <button className="button" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Signup;