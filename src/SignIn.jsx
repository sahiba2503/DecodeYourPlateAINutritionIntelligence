
import PageMainContaint from "./PageMainContaint"
import PageNave from "./PageNave";

function SignIn() {
  return (
    <div className="SignpageContainer"> 
      <PageNave />
    <div className="bodyContainer"> 
    <PageMainContaint />
     <div className="signInForm">
                <h3 style={{textAlign:"center"}}>Create Your Account</h3>
                <p style={{textAlign:"center"}}>sign in to get started with your health journey</p>
                <input type="text"  placeholder="Full Name"/>
                <input type="emain" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <h5>I agree to the Terms of Service and Privecy Policy</h5>
                <input type="checkbox"/>
                <button id="signbtn"> Sign in</button>
                     </div> 
      </div>
    </div>
  )
}

export default SignIn
