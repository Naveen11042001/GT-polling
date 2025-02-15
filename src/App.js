import logo from "./logo.svg";
import "./App.css";
import Poll from "./components/Poll";
import Createacc from "./components/Createacc";
import Responsive from "./components/responsive";
import Twitsignin from "./components/Twitsignin";
import Practiceresponsive from "./components/Practiceresponsive";
import Pollingpage from "./components/Pollingpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Twitsignin1 from "./components/Twitsignin1";
import Signup from "./components/Signup";
import Otp from "./components/Otp";
import Password from "./components/Password";
import Otpfirebase1 from "./components/Otpfirebase1";
import Otpfirebase2 from "./components/Otpfirebase2";
import Forgetpass from "./components/Forgetpass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>


      {/* <Otpfirebase1/> */}
      {/* <Password/> */}
      {/* <Otp/> */}
      {/* <Signup/> */}
      {/* <Homepage/> */}
      {/* <Pollingpage/> */}
      {/* <Twitsignin/> */}
      {/* <Createacc/>    */}
      {/* <Poll/> */}
      {/* <Responsive/> */}
      {/* <Practiceresponsive/> */}
      {/* <Forgetpass/> */}
      {/* <Navbar/> */}

  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Twitsignin1 />}></Route>
          <Route path="/Homepage" element={<Homepage />}></Route>
          <Route path="/Pollingpage" element={<Pollingpage />}></Route>
          <Route path="/Createacc" element={<Createacc />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Twitsignin1" element={<Twitsignin1 />}></Route>
          <Route path="/Otpfirebase1" element={<Otpfirebase1 />}></Route>
          <Route path="/Otpfirebase2" element={<Otpfirebase2 />}></Route>
          <Route path="/Password" element={<Password />}></Route>
          <Route path="/Forgetpass" element={<Forgetpass />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
