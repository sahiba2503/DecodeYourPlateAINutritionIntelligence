

function SignupPage() {
  
  return (   
    <div>
      <div className="signForm">
                <h3 style={{textAlign:"center"}}>Welcome Back</h3>
                <p style={{textAlign:"center"}}>Sign in to your account</p>
                <input type="email"  placeholder="Enter your email address"/>
                <input type="password" placeholder="enter your password" />
                <h5>Remember me </h5>
                <input type="checkbox"/>
                <h5>Forgot Passwoord?</h5>
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

export default SignupPage
