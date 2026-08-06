
import PageMainContaint from "./PageMainContaint";
import SignPage from "./SignPage";
function SignUp() {              
              let sortHeading = "Welcom Back";
              let hedingContent = (  <> Good to See you <span>Again!</span>  </>);
               let detailContaint = "AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.";
             
  return (
    <div className="SignpageContainer">            
            <PageMainContaint sortHeading={sortHeading} hedingContent={hedingContent} detailContaint = {detailContaint} />
            <SignPage  />
             </div>
  )
}

export default SignUp
