import { Route, Routes } from "react-router-dom"
import { Account } from "../../account/pages/Account"
import { Login } from "../../authentication/login/pages/Login"
import { Register } from "../../authentication/register/pages/Register"
import { CreateStudentGoal } from "../../student-goal/pages/CreateStudentGoal"
import { ModifyStudentGoal } from "../../student-goal/pages/ModifyStudentGoal"
import { LessonList } from "../../teacher/lessonList/pages/LessonList"
import { StudentList } from "../../teacher/studentList/pages/StudentList"
import { ModuleList } from "../../teacher/moduleList/pages/ModuleList"
import { CreateModule } from "../../modules/pages/CreateModule"
import { ModifyModule } from "../../modules/pages/ModifyModule"
import { CreateGoal } from "../../goals/pages/CreateGoal"
import { ModifyGoal } from "../../goals/pages/ModifyGoal"

import { ModuleDetails } from "../../teacher/moduleDetail/pages/ModuleDetails"
export const Routing = () => {
    return (
        <Routes>
            <Route index path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register/:roleName" element={<Register />} />

            <Route path="/teacher/student/list" element={<StudentList />} />
            <Route path="/teacher/lessons/list" element={<LessonList />} />
            <Route path="/teacher/modules/list" element={<ModuleList />} />

            <Route path="/teacher/student/:studentId/goal/:goalId/student-goal/create" element={<CreateStudentGoal />} />
            <Route path="/teacher/student-goal/:goalId/modify" element={<ModifyStudentGoal />} />

            <Route path="teacher/classroom/:classroomId/modules/create" element={<CreateModule />} />
            <Route path="teacher/module/:moduleId/modify" element={<ModifyModule />} />

            <Route path="teacher/module/:moduleId/goal/create" element={<CreateGoal />} />
            <Route path="teacher/module/:moduleId/goal/:goalId/modify" element={<ModifyGoal />} />

            <Route path="teacher/module/:moduleId" element={<ModuleDetails />} />

        </Routes>
    )
}
