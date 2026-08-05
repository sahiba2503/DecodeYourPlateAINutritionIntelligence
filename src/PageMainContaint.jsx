
import nutritionImgB from "./assets/nutritionImgB.jpg"

function PageMainContaint(props) {
     
  return (
   
      <div className="mainContant">
              <h6>{props.sortHeading}</h6>
              <h1>{props.hedingContent}</h1>
              <p>{props.detailContaint}</p>
              <img src={nutritionImgB} />
            </div> 
   
  )
}

export default PageMainContaint
