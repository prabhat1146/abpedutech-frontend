import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./layout/Home";
import ErrorPage from "./layout/ErrorPage";
import Login from "./components/auth/Login";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import UserDashboard from "./features/UserDashboard";
import MockTestDashboard from "./features/mock-tests/MockTestDashboard";
import ViewTest from "./features/mock-tests/components/ViewTest";
import OngoingTest from "./features/mock-tests/components/OngoingTest";

function App() {
  return (
    <Routes>
      <Route path="/test/mock-test/:id/attempt" element={<OngoingTest />}></Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="dashboard" element={<UserDashboard/>} />
        <Route path="test" element={<Outlet />}>
          <Route path="mock-test" element={<Outlet />}>
            <Route path="" element={<MockTestDashboard />}></Route>
            <Route path=":id" element={<ViewTest />}></Route>
            
          </Route>
        </Route>

        <Route path="about-us" element={<AboutUs/>}/>
        <Route path="contact-us" element={<ContactUs/>}/>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
