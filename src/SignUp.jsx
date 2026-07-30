
import nutritionImgC from "./assets/nutritionImgC.jpg";
import nutritionImgB from "./assets/nutritionImgB.jpg";
function SignUp() {
  return (
    <div className="SignpageContainer"> 

      <div className='SignNavebar'>
        <div className="navelogoWithContent">
            <img src={nutritionImgC} />
            <div>NUTRITION <div>INTELLIGENCE</div></div>
        </div>       
        <div className="aboutAccount"><p>Already have an account?</p><strong>Sign in</strong></div>
      </div>

      <div className="bodyContainer">
            <div className="mainContant">
              <h6>Welcom to Nutrition Intelligence</h6>
              <h1>Understand Your Food.Improve <span >Your Health</span></h1>
              <p>AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.</p>
              <img src={nutritionImgB} />
            </div>     
            <div className="signUpForm">
                <h3 style={{textAlign:"center"}}>Create Your Account</h3>
                <p style={{textAlign:"center"}}>sign up to get started with your health journey</p>
                <input type="text"  placeholder="Full Name"/>
                <input type="emain" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Confirm Password" />
                <h5>I agree to the Terms of Service and Privecy Policy</h5>
                <input type="checkbox"/>
                <button id="signbtn"> Sign Up</button>
                  <p style={{textAlign:"center"}}>Or Sign up with </p>
                  <div className="signupOptionBtn">  
                  <button >Google</button>
                  <button>Apple</button>
                  </div>
                </div>       

          </div>

    </div>
  )
}

export default SignUp
