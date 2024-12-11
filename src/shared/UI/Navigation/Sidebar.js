import { NavLink } from "react-router-dom";

import { CiHome } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineSubject } from "react-icons/md";
import { CiTimer } from "react-icons/ci";

import classes from "./Sidebar.module.css";

const SideBar = () => {
  return (
    <nav className={classes.Navigation}>
      <ul>
        <li>
          <div className={classes.NavigationBlock}>
            <CiHome />
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Home
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.NavigationBlock}>
            <PiStudent />
            <NavLink
              to="/students"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Students
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.NavigationBlock}>
            <LiaChalkboardTeacherSolid />
            <NavLink
              to="/tutors"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Tutors
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.NavigationBlock}>
            <MdOutlineSubject />
            <NavLink
              to="/subjects"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Subjects
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.NavigationBlock}>
            <CiTimer />
            <NavLink
              to="/sessions"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Sessions
            </NavLink>
          </div>
        </li>
        <li>
          <div className={classes.NavigationBlock}>
            <RiMoneyDollarCircleLine />
            <NavLink
              to="/payout"
              className={({ isActive }) => {
                return isActive ? classes.NavlinkActive : null;
              }}
            >
              Payout
            </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
