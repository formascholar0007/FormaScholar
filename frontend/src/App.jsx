import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalInfo from "./auth/AdditionalInfo";
import LoginForm from "./auth/LoginForm";
import Registrationform from "./auth/Registrationform";
import ForgetPassword from "./auth/ForgetPassword";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ResetPassword from "./auth/ResetPassword";
import UserProfile from "./pages/UserProfile";
import UserChapter from "./pages/UserChapters";
import SubjectSyllabus from "./pages/SubjectSyllabus";
import AdminChapter from "./Admin/AdminChapters";
import Footer from "./component/Footer";
import { AuthProvider } from "./auth/AuthContext";
import AdminPanel from "./Admin/AdminPanel";
import { useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import DashHome from "./Admin/DashHome";
import ClassName from "./Admin/ClassName";
import Subjects from "./Admin/Subjects";
import { Logout } from "./auth/Logout";
import AdminRegister from "./Admin/AdminRegister";
import AdminLogin from "./Admin/AdminLogin";

function App() {
  // window.addEventListener('beforeunload', (e)=>{
  //   let message = "Are you sure want to leave?";
  //   e.returnValue = message;
  // });

  const [isAdmim, setIsAdmin] = useState(false);

  return (
    <>
      <AuthProvider>
        <Router>
          {!isAdmim && <Navbar />}

          {/* If the left operand (!isAdminPanel in this case) is falsy, it
          returns the left operand. // If the left operand is truthy, it returns
          the right operand (<Navbar /> in this case).  */}
          <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/registration" element={<Registrationform />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/additionalInfo" element={<AdditionalInfo />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="*" element={<PageNotFound />} />
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
              element={<UserChapter />}
            />
            <Route path="/profile" element={<UserProfile />} />

            <Route
              path="/adminPanel"
              element={<AdminPanel setIsAdmin={setIsAdmin} />}
            >
              
              <Route index element={<DashHome />} />

              <Route path="/adminPanel/className" element={<ClassName />} />
              <Route
                path="/adminPanel/adminRegister"
                element={<AdminRegister />}
              />
              <Route path="/adminPanel/adminLogin" element={<AdminLogin />} />
              <Route
                path="/adminPanel/subjects/:classId"
                element={<Subjects />}
              />

              <Route
                path="/adminPanel/:classId/adminChapter/:subjectid"
                element={<AdminChapter />}
              />
            </Route>
          </Routes>

          {!isAdmim && <Footer />}
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
