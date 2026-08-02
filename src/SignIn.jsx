
import PageMainContaint from "./PageMainContaint"


function SignIn() {
  return (
      
    <div className="bodyContainer"> 
    <PageMainContaint />
     <div className="signForm">
                <h3 style={{textAlign:"center"}}>Welcom Back</h3>
                <p style={{textAlign:"center"}}>sign in to your account</p>
                <input type="emain" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <h5>Remember me</h5>
                <input type="checkbox"/>
                <strong style={{color:"green"}}>Forgot Password?</strong>
                <button id="signbtn"> Sign in</button>
                  <p style={{textAlign:"center"}}>Or Sign in with </p>
                  <div className="signOptionBtn">  
                  <button >Google</button>
                  <button>Apple</button>
                  </div>

                     </div> 
      </div>
   
  )
}

export default SignIn
