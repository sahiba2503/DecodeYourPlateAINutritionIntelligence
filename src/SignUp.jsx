

import PageNave from "./PageNave";
import PageMainContaint from "./PageMainContaint";
import SignPage from "./SignPage";
function SignUp() {
  return (
    <div className="SignpageContainer"> 
     
      <PageNave />
      <div className="bodyContainer">
           
            <PageMainContaint />
            <SignPage />

          </div>

    </div>
  )
}

export default SignUp
