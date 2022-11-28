import React from "react";
import './Signup.css';

const Signup = () => {
    return (
        <form>
            <div className="signup-controls">
                <h1>Sign Up</h1>
                <p>Please fill the details to sign up</p>
                <div className="signup-control">
                    <label className="label" for="name" > <b>Name</b> </label>
                    <br />
                    <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                    
                    <br />
                    <br/>

                    <label className="label" id="email" for="email" > <b>&nbsp;Email</b> </label>
                    <br />
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                    
                    <br />
                    <br/>

                    <label className="label" for="phone"><b>Phone Number</b></label>
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
                        <input type="phone" name="phone" placeholder="812345678" required />
                    </div>

                    

                    <label className="label" for="password" > <b>Password</b> </label>
                    <br />
                    <input type="password" id="password" name="password" placeholder="Type your password" required />

                    <br />
                    <br/>

                    <label className="label" for="confirmPassword" > <b>&nbsp;Confirm Password</b> </label>
                    <br />
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Retype your password" required />

                    <br />
                    <br/>

                    <div>
                        <button className="button" type="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Signup;