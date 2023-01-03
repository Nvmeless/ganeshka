import { Route, Routes } from "react-router-dom";
import { Account } from "../../../../account/pages/Account";
import { Register } from "../../../../authentication/register/pages/Register";
import { Login } from "../../../../authentication/login/pages/Login";

import LessonList from "../../../../teacher/lessonList/pages/LessonList";
import ModuleList from "../../../../teacher/moduleList/pages/ModuleList";
import StudentList from "../../../../teacher/studentList/pages/StudentList";

export const Routing = () => {
  return (
    <Routes>
      <Route index path="/account" element={<Account />} />
      <Route path="/register/:roleName" element={<Register />} />
      <Route path="/teacher/student/list" element={<StudentList />} />
      <Route path="/teacher/lessons/list" element={<LessonList />} />
      <Route path="/teacher/modules/list" element={<ModuleList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
