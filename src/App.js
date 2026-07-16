import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import MockTestList from "./features/mock-tests/pages/MockTestList";
import CreateMockTest from "./features/mock-tests/pages/CreateMockTest";
import AdminDashboard from "./features/admin/dashboard/AdminDashboard";
import ErrorPage from "./layout/ErrorPage";
import QuestionDashboard from "./features/admin/questions/QuestionDashboard";
import CreateQuestion from "./features/admin/questions/pages/createQuestion/CreateQuestion";
import SubjectManagement from "./features/admin/courses/Academic Structure/SubjectManagement/SubjectManagement";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="user" element={<Outlet />}>
          <Route path="admin" element={<Outlet />}>
            <Route path="dashboard" element={<AdminDashboard />}></Route>
            <Route path="questions" element={<Outlet />}>
              <Route path="" element={<QuestionDashboard />}></Route>
              <Route
                path="create-question"
                element={<CreateQuestion />}
              ></Route>
            </Route>
            <Route path="course" element={<Outlet />}>
              <Route path="subjects" element={<Outlet />}>
                <Route
                  path="subjects-dashboard"
                  element={<SubjectManagement />}
                ></Route>
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="test" element={<Outlet />}>
          <Route path="mocktest" element={<Outlet />}>
            <Route path="mocktest-list" element={<MockTestList />}></Route>
            <Route path="create-mocktest" element={<CreateMockTest />}></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
