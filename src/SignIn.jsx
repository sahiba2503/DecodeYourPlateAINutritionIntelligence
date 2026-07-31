import SignPage from "./SignPage"
import PageMainContaint from "./PageMainContaint"
import PageNave from "./PageNave";

function SignIn() {
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

export default SignIn
