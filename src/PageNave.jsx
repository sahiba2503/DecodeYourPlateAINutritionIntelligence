import nutritionImgC from "./assets/nutritionImgC.jpg"

function PageNave() {
  return (   
      <div className='SignNavebar'>
              <div className="navelogoWithContent">
                  <img src={nutritionImgC} />
                  <div>NUTRITION <div>INTELLIGENCE</div></div>
              </div>       
              <div className="aboutAccount"><p>Already have an account?</p><strong>Sign in</strong></div>
            </div>
    
  )
}

export default PageNave
