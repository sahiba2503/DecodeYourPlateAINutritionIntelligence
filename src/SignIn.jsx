
import PageMainContaint from "./PageMainContaint";
import SignPage from "./SignPage";
function SignUp() {              
              let sortHeading = "Welcom Back";
              let hedingContent = (  <> Good to See you <span>Again!</span>  </>);
              let detailContaint = "Sign in to continue your health and nutrition journey";

  return (
    <div className="SignpageContainer">      
      <div className="bodyContainer">    
            <PageMainContaint sortHeading={sortHeading} hedingContent={hedingContent} detailContaint = {detailContaint}/>
            <SignPage  />
          </div>
    </div>
  )
}

export default SignUp
