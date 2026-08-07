


import SignupPage from "./component/SignupPage";
import PageMainContaint from "./PageMainContaint";
function SignUp() {

              
              let sortHeading = "Welcom to Nutrition Intelligence";
              let hedingContent = (  <> Understand Your Food. Improve <span>Your Health</span>  </>);
              let detailContaint = "AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.";

  return (
    <div className="SignpageContainer">      
            <PageMainContaint sortHeading={sortHeading} hedingContent={hedingContent} detailContaint = {detailContaint}/>
            <SignupPage />
             </div>
  )
}

export default SignUp
