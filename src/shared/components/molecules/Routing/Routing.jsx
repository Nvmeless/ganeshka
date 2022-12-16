import { Route, Routes } from "react-router-dom"
import { Account } from "../../../../account/pages/Account"
import { Register } from "../../../../authentication/register/pages/Register"
import { ListLessons } from "../../../../list/pages/ListLessons"
import { ListModules } from "../../../../list/pages/ListModules"
import { ListStudents } from "../../../../list/pages/ListStudents"

export const Routing = () => {
    return (
        <Routes>
            <Route index path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/students" element={<ListStudents />} />
            <Route path="/lessons" element={<ListLessons />} />
            <Route path="/modules" element={<ListModules />} />
        </Routes>
    )
}