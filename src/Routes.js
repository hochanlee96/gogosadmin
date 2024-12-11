import { Route, Navigate, Routes } from "react-router-dom";

import ScrollToTop from "./shared/UI/Navigation/ScrollToTop";
import Sidebar from "./shared/UI/Navigation/Sidebar";

import Home from "./Pages/Home/containers/Home";
import Student from "./Pages/Student/containers/Student";
import Tutor from "./Pages/Tutor/containers/Tutor";
import Subject from "./Pages/Subject/containers/Subject";
import Session from "./Pages/Session/containers/Session";
import Payout from "./Pages/Test/containers/Payout";

import Login from "./Pages/Authentication/containers/Login";
import Signup from "./Pages/Authentication/containers/Signup";

import classes from "./Routes.module.css";

const TutorRoutes = ({ isSignedIn }) => {
  let routes;
  if (isSignedIn) {
    routes = (
      <div className={classes.Container}>
        <div className={classes.Sidebar}>
          <Sidebar />
        </div>
        <div className={classes.Main}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/students" element={<Student />} />
            <Route exact path="/tutors" element={<Tutor />} />
            <Route exact path="/subjects" element={<Subject />} />
            <Route exact path="/sessions" element={<Session />} />
            <Route exact path="/payout" element={<Payout />} />
            <Route path="/*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </div>
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
