import nutritionimgA from "./assets/nutritionimgA.jpg";
import nutritionImgC from "./assets/nutritionImgC.jpg";
import nutritionImg from "./assets/nutritionImg.jpg";
function MainContainer() {
  return (
   
    <div>
    <div className="bodyContainer">
      <div className="mainContant">
        <h6>AI-Powered Nutrition Tracking</h6>
        <h1>Understand Your Food.Improve <span >Your Health</span></h1>
        <p>AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.</p>
        <div className="mainContantButtons">
        <button>Sign Up</button>
        <button>Sign In</button>
        </div>

        <div className="mainInfo">
          <div>
            <img src={nutritionImgC} />
            <p>Personalized Insights</p>
          </div>
            <div>
            <img src={nutritionImgC} />
            <p>Track your progress</p>
          </div>
          <div>
            <img src={nutritionImgC} />
            <p>Secure & private</p>
          </div>            
        </div>

      </div>
      <div className="mainImage">
        <img src={nutritionimgA}  />
      </div>
    </div>
    <div className="bodyfoote">
      <div>
            <img src={nutritionImg} />
            <p>Secure & private</p>
          </div> 
          <div>
            <img src={nutritionImg} />
            <p>Secure & private</p>
          </div> 
          <div>
            <img src={nutritionImg} />
            <p>Secure & private</p>
          </div> 
          <div>
            <img src={nutritionImg} />
            <p>Secure & private</p>
          </div> 
    </div>
    </div>
    
  )
}

export default MainContainer
