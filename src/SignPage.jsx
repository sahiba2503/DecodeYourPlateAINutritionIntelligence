

function SignPage() {
  
  return (    
      <div>
              <div className="signForm">
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
                  <div className="signOptionBtn">  
                  <button >Google</button>
                  <button>Apple</button>
                  </div>
                  </div>
                </div> 
   
  )
}

export default SignPage
