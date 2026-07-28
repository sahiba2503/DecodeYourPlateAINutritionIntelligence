import nutritionimgA from "./assets/nutritionimgA.jpg";

function MainContainer() {
  return (
    <div className="bodyContainer">
      <div className="mainContant">
        <h6>AI-Powered Nutrition Tracking</h6>
        <h1>Understand Your Food.Improve <span >Your Health</span></h1>
        <p>AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.</p>
        <div className="mainContantButtons">
        <button>Sign Up</button>
        <button>Sign In</button>
        </div>
        {/* <div className="mainInfo">
            <div>Personalized Insights</div>
            <div>Track your progress</div>
            <div>Secure & private</div>
        </div> */}
      </div>
      <div className="mainImage">
        <img src={nutritionimgA}  />
      </div>
    </div>
  )
}

export default MainContainer
