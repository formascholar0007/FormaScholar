import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalInfo from "./auth/AdditionalInfo";
import LoginForm from "./auth/LoginForm";
import Registrationform from "./auth/Registrationform";
import ForgetPassword from "./auth/ForgetPassword";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ResetPassword from "./auth/ResetPassword";
import UserProfile from "./pages/UserProfile";
import SubjectSyllabus from "./pages/SubjectSyllabus";
import Chapters from "./pages/Chapters";
import Footer from "./component/Footer";
import { AuthProvider } from "./auth/AuthContext";

function App() {
  // window.addEventListener('beforeunload', (e)=>{
  //   let message = "Are you sure want to leave?";
  //   e.returnValue = message;
  // });
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/registration" element={<Registrationform />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/additionalInfo" element={<AdditionalInfo />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route
              path="/resetPassword/:userId/:token"
              element={<ResetPassword />}
            />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route
              path="/subjectSyllabus/:grade/:subject"
              element={<SubjectSyllabus />}
            />
            <Route
              path="/chapters/:grade/:subject/:chapter"
              element={<Chapters />}
            />
            <Route
              path="/profile"
              element={<UserProfile />}
            />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
