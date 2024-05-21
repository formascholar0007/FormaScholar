import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdditionalInfo from "./auth/AdditionalInfo";
import LoginForm from "./auth/LoginForm";
import Registrationform from "./auth/Registrationform";
import ForgetPassword from "./auth/ForgetPassword";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import ResetPassword from "./auth/ResetPassword";
import UserProfile from "./pages/UserProfile";
import UserChapter from "./pages/UserExercise";
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
import AdminExercise from "./Admin/AdminExercise";
import AdminQuestionAnswer from "./Admin/AdminQuestionAnswer";
import AdminUserData from "./Admin/AdminUserData";
import UserExercise from "./pages/UserExercise";
import UserQuestionSolutions from "./pages/UserQuestionSolutions";
import SpecificClass from "./pages/SpecificClass";
import ContactUs from "./pages/ContactUs";
import MeetUs from "./pages/MeetUs";
import AuthUser from "./pages/AuthUser";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <AuthProvider>
        <Router>
          {/* {!isAdmin && !['/loginform', '/registration'].includes(window.location.pathname) && <Navbar />} Render Navbar everywhere except on login and register pages for non-admin users */}
          {!isAdmin && <Navbar />}
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/registration" element={<Registrationform />} />
            <Route path="/loginform" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />

            <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/additionalInfo" element={<AdditionalInfo />} />
            <Route path="/forgetPassword" element={<ForgetPassword />} />
            <Route path="*" element={<PageNotFound />} />
            <Route
              path="/resetPassword/:userId/:token"
              element={<ResetPassword />}
            />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/authUser" element={<AuthUser />} />
            <Route
              path="/subjectSyllabus/:grade/:classId/:subjectId"
              element={<SubjectSyllabus />}
            />
            <Route
              path="/exercise/:classId/:subjectId/:chapterId"
              element={<UserExercise />}
            />
            <Route
              path="/userQuestionSolution/:classId/:subjectId/:chapterId/:exerciseId"
              element={<UserQuestionSolutions />}
            />
            <Route path="/profile" element={<UserProfile />} />
            <Route
              path="/specificClass/:subjectName"
              element={<SpecificClass />}
            />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/meetUs" element={<MeetUs />} />
            <Route path="/aboutUs" element={<AboutUs />} />

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
              <Route
                path="/adminPanel/:classId/adminChapter/:subjectid/adminExercise/:chapterId"
                element={<AdminExercise />}
              />
              <Route
                path="/adminPanel/:classId/adminChapter/:subjectid/adminExercise/:chapterId/adminQuestionAnswer/:exerciseId"
                element={<AdminQuestionAnswer />}
              />
              <Route
                path="/adminPanel/adminUserData"
                element={<AdminUserData />}
              />
            </Route>
          </Routes>

          <ToastContainer />

          {!isAdmin &&  <Footer />} {/* Render Footer everywhere except on login and register pages for non-admin users */}
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
