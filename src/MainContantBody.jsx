import nutritionImgC from "./assets/nutritionImgC.jpg";
import { useNavigate } from "react-router-dom";
function MainContantBody() {
  let navigate = useNavigate();
  return (
    <div className='mainContant'>
      <h6>AI-Powered Nutrition Tracking</h6>
      <h1>
        Understand Your Food.Improve <span>Your Health</span>
      </h1>
      <p>
        AI-powered nutrition tracking to help you build healthier habits every
        day. Scan your meals, track nutrients, and achieve your goals.
      </p>
      <div className='mainContantButtons'>
        <button onClick={()=>navigate("/signInPage")}>Sign In</button>
        <button onClick={()=>navigate("/signUpPage")}>Sign Up</button>
      </div>
      <div className='mainInfo'>
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
  );
}

export default MainContantBody;
