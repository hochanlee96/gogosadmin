import { Route, Navigate, Routes } from "react-router-dom";

import ScrollToTop from "./shared/UI/Navigation/ScrollToTop";

import Home from "./Pages/Home/containers/Home";
import Login from "./Pages/Authentication/containers/Login";
import Signup from "./Pages/Authentication/containers/Signup";

const TutorRoutes = ({ isSignedIn }) => {
  let routes;
  if (isSignedIn) {
    routes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="/*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  }
  return (
    <>
      <ScrollToTop />
      <main>{routes}</main>
    </>
  );
};

export default TutorRoutes;
