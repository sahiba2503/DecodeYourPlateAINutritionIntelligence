
import sunlight from "../assets/sunlight.png";
import nutritionImgC from "../assets/nutritionImgC.jpg";
import {useNavigate,useLocation} from "react-router-dom";
function NaveBar() {
  let navigate = useNavigate();
  let location = useLocation();
  return (
    <div className="nave_bar">
      <div className="nutritionLog">
         <img src={nutritionImgC} />
         <div>
          <li>NUTRITION</li>
          <li>INTELLIGENCE</li>
         </div>
      </div>
     
      <ul>
        <li onClick={()=>navigate("/home") }  className={location.pathname.startsWith("/home")?"activeLink":"normalLink" }>Home</li>
        <li>Features</li>
        <li>How It Works</li>
        <li>Benefits</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className='naveButtons'>
      <img src={sunlight} />
        <button onClick={()=>navigate("/signInPage")} className={location.pathname.endsWith("/signInPage") ? "activeLink" : "normalLink"}>Sign in</button>
        <button onClick={()=>navigate("/signUpPage")} className={location.pathname.endsWith("/signUpPage") ? "activeLink" : "normalLink"}>Sign Up</button> 
      </div>
    </div>
  )
}

export default NaveBar
