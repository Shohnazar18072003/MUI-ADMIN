import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LayoutAdmin from "./components/layout";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import StudentPage from "./pages/StudentPage/StudentPage";
import TeacherPage from "./pages/TeacherPage/TeacherPage";
import TeachersStudent from "./pages/TeacherPage/TeachersStudent";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  // const [isLogin, setIsLogin] = useState(localStorage.getItem("IS_LOGIN"));
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage/>} />
          <Route element={<LayoutAdmin/>}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="teachers" element={<TeacherPage />} />
            <Route path="students" element={<StudentPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="/teachers/:teachersId" element={<TeachersStudent />} />
          </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
