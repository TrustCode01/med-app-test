import React from 'react'
import './Sign_Up.css';

const Sign_Up = ()=> {
  return (
    <div>
       <div className="container" style="margin-top: 5%;">
        <div className="signup-grid"> 
            <div className="signup-text"> 
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style="text-align: left;"> 
                Already a member? <span><a href="../Login/Login.html" style="color: #2190FF;"> Login</a></span>
            </div>
            <div className="signup-form"> 
                <form> 

                    <div className="form-group">
                        <label for="name">Name</label> 
                        <input type="text" name="name" id="name" required class="form-control" placeholder="Enter your name" aria-describedby="helpId" /> 
                    </div>

                    <div className="form-group"> 
                        <label for="phone">Phone</label> 
                        <input type="tel" name="phone" id="phone" 
                        required className="form-control" 
                        placeholder="Enter your phone number" 
                        aria-describedby="helpId" 
                        pattern='\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|
                            2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|
                            4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$'/> 
                    </div>

                    <div className="form-group"> 
                        <label for="email">Email</label>
                        <input type="email" name="email"
                         id="email" required class="form-control"placeholder="Enter your email" aria-describedby="helpId" 
                          pattern='^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$' /> 
                    </div>

                    <div className="form-group"> 
                        <label for="password">Password</label>
                        <input name="password" 
                        id="password" required className="form-control" placeholder="Enter your password" 
                        aria-describedby="helpId" pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=()!? "]).{8,128}$'/> 
                    </div>

                    <div className="btn-group"> 
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button> 
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button> 
                    </div>
                </form> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default Sign_Up