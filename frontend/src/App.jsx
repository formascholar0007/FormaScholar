import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
import AdminPanel from "./Admin/AdminPanel";
import { useState } from "react";
import PageNotFound from "./pages/PageNotFound";
import DocumentInput from "./Admin/DocumentInput";

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
              element={<Chapters />}
            />
            <Route path="/profile" element={<UserProfile />} />

            <Route
              path="/adminPanel"
              element={<AdminPanel setIsAdmin={setIsAdmin} />}>
                <Route path="documentInput" element={<DocumentInput />} />
            </Route>

          </Routes>

          {!isAdmim && <Footer />}
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
