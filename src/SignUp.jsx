


import PageMainContaint from "./PageMainContaint";
import SignPage from "./SignPage";
function SignUp() {

              
              let sortHeading = "Welcom to Nutrition Intelligence";
              let hedingContent = (  <> Understand Your Food. Improve <span>Your Health</span>  </>);
              let detailContaint = "AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.";

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
