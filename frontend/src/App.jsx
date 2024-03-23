import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalInfo from "./auth/AdditionalInfo";
import LoginForm from "./auth/LoginForm";
import Registrationform from "./auth/Registrationform";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact="true" element={<Home />} />
          <Route path="/registration" element={<Registrationform />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/additionalInfo" element={<AdditionalInfo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
