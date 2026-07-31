
import nutritionImgB from "./assets/nutritionImgB.jpg"

function PageMainContaint() {
  return (
    <div>
      <div className="mainContant">
              <h6>Welcom to Nutrition Intelligence</h6>
              <h1>Understand Your Food.Improve <span >Your Health</span></h1>
              <p>AI-powered nutrition tracking to help you build healthier habits every day. Scan your meals, track nutrients, and achieve your goals.</p>
              <img src={nutritionImgB} />
            </div> 
    </div>
  )
}

export default PageMainContaint
