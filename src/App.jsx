import { useEffect } from "react";
import NaveBar from "./Component/NaveBar";
import MainContainer from "./MainContainer";
import { useLocation , useNavigate} from "react-router-dom";
function App() {
  let location = useLocation();
 let navigate = useNavigate();
  useEffect(()=>{
    if(location.pathname === "/"){
          navigate("/home");
    }
  },)
  return (
    <div className="bodyOuterContainer">
      < NaveBar />
      <MainContainer />
    </div>
  );
}

export default App;
