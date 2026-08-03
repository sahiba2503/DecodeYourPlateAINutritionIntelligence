import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function MainContainer() {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Homepage />}></Route>
        <Route path="/signInPage" element={<SignIn />}></Route>
        <Route path="/signUpPage" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default MainContainer;
