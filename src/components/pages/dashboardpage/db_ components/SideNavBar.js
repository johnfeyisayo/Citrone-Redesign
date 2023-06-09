/* eslint-disable no-unused-vars */
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import { useState, useEffect } from 'react';
import { Link, useAsyncError } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
/* import 'react-pro-sidebar/dist/css/styles.css'; */
import ActiveDashboardIcon from '../images/dashboard-colored.svg';
import DashboardIcon from '../images/dashboard-default.svg';
import CourseIcon from '../images/course-icon.svg';
import ActiveCourseIcon from '../images/course-colored.svg';
import AssignmentIcon from '../images/assignment-icon.svg';
import ActiveAssignmentIcon from '../images/assignment-colored.svg';
import QuizIcon from '../images/quiz-icon.svg';
import ActiveQuizIcon from '../images/quiz-colored.svg';
import StIcon from '../images/st-icon.svg';
import ActiveStIcon from '../images/st-colored.svg';
import FaqIcon from '../images/faq-icon.svg';
import ActiveFaqIcon from '../images/faq-colored.svg';
import SettingsIcon from '../images/settings-icon.svg';
import ActiveSettingsIcon from '../images/settings-icon-colored.svg';
import LogOutIcon from '../images/logout-icon.svg';
import MainProfilePic from '../images/main-profile-pic.png';
import styles from './/Dashboard.module.css';
import LogOutModal from './LogOutModal';

const SideNavBar = (props) => {
  const [modalShow, setModalShow] = useState(false);

  const { collapsed } = useProSidebar();

  // const [isActiveDashboard, setIsActiveDashboard] = useState(false);
  // const [isActiveCourse, setIsActiveCourse] = useState(false);
  // const [isActiveAssignment, setIsActiveAssignment] = useState(false);
  // const [isActiveQuiz, setIsActiveQuiz] = useState(false);
  // const [isActiveSt, setIsActiveSt] = useState(false);
  // const [isActiveFaq, setIsActiveFaq] = useState(false);
  // const [isActiveSettings, setIsActiveSettings] = useState(false);

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveDashboard(path === '/dashboard');
  // }, [setIsActiveDashboard]);

  // const activeDashboardClick = () => {
  //   setIsActiveDashboard(true);
  //   setIsActiveCourse(false);
  // };

  // const activeCourseClick = () => {
  //   setIsActiveDashboard(false);
  //   setIsActiveCourse(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveCourse(path === '/course-content');
  //   // setIsActiveCourse(path === '/course-module-one');
  // }, [setIsActiveCourse]);

  // const activeAssignmentClick = () => {
  //   setIsActiveDashboard(false);
  //   setIsActiveCourse(false);
  //   setIsActiveAssignment(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveAssignment(path === '/assignment');
  //   /* setIsActiveAssignment(path === '/lesson-1-assignment'); */
  // }, [setIsActiveAssignment]);

  // const activeQuizClick = () => {
  //   setIsActiveAssignment(false);
  //   setIsActiveQuiz(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveQuiz(path === '/quizzes');
  // }, [setIsActiveQuiz]);

  // const activeStClick = () => {
  //   setIsActiveQuiz(false);
  //   setIsActiveSt(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveSt(path === '/students_tutors');
  // }, [setIsActiveSt]);

  // const activeFaqClick = () => {
  //   setIsActiveSt(false);
  //   setIsActiveFaq(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveFaq(path === '/faq');
  // }, [setIsActiveFaq]);

  // const activeSettingsClick = () => {
  //   setIsActiveFaq(false);
  //   setIsActiveSettings(true);
  // };

  // useEffect(() => {
  //   const path = window.location.pathname;
  //   setIsActiveSettings(path === '/settings');
  // }, [setIsActiveSettings]);

  const [activePath, setActivePath] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div id="app" style={{ height: '100%' }}>
      <Sidebar
        style={{
          height: '165vh',
          background: 'white',
          position: 'fixed',
          top: '5.1rem',
          zIndex: '2'
        }}
        collapsed={collapsed}>
        <Menu>
          {collapsed && (
            <div className={styles.profilePicSmall}>
              <img src={MainProfilePic} className={styles.profileImgSmall} alt="Profile Picture" />
            </div>
          )}
          {!collapsed && (
            <>
              <div className={styles.profilePic}>
                <img src={MainProfilePic} className={styles.profileImg} alt="Profile Picture" />
              </div>
              <p className={styles.profileName}>Olurotimi Akinnagbe</p>
              <span className={styles.profileCourse}>UI/UX Design</span>
            </>
          )}

          <MenuItem
            component={<Link to="/dashboard" />}
            id={styles.menuItem}
            key="dashboard"
            className={`${styles.menuDashboard} ${
              activePath.startsWith('/dashboard') || activePath.startsWith('/completed-modules')
                ? styles.active
                : ''
            }`}>
            <img
              src={
                activePath.startsWith('/dashboard') || activePath.startsWith('/completed-modules')
                  ? ActiveDashboardIcon
                  : DashboardIcon
              }
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Dashboard</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/course-content" />}
            key="course"
            className={`${styles.course} ${
              activePath.startsWith('/course-content') ||
              activePath.startsWith('/course-module-one')
                ? styles.active
                : ''
            }`}
            id={styles.menuItemLink}>
            <img
              src={
                activePath.startsWith('/course-content') ||
                activePath.startsWith('/course-module-one')
                  ? ActiveCourseIcon
                  : CourseIcon
              }
              alt="Course Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Course Content</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/assignment" className={styles.sideMenu} />}
            className={`${styles.assignment} ${
              activePath.startsWith('/assignment') ||
              activePath.startsWith('/lesson-assignments') ||
              activePath.startsWith('/lesson-1-assignment') ||
              activePath.startsWith('/lesson-grades') ||
              activePath.startsWith('/re-submit')
                ? styles.active
                : ''
            }`}
            id={styles.menuItemLink}>
            <img
              src={
                activePath.startsWith('/assignment') ||
                activePath.startsWith('/lesson-assignments') ||
                activePath.startsWith('/lesson-1-assignment') ||
                activePath.startsWith('/lesson-grades') ||
                activePath.startsWith('/re-submit')
                  ? ActiveAssignmentIcon
                  : AssignmentIcon
              }
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Assignment</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/quizzes" className={styles.sideMenu} />}
            className={`${styles.quiz} ${
              activePath.startsWith('/quizzes') ||
              activePath.startsWith('/quizgrade') ||
              activePath.startsWith('/moduleone')
                ? styles.active
                : ''
            }`}
            id={styles.menuItemLink}>
            <img
              src={
                activePath.startsWith('/quizzes') ||
                activePath.startsWith('/quizgrade') ||
                activePath.startsWith('/moduleone')
                  ? ActiveQuizIcon
                  : QuizIcon
              }
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Quizzes</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/students_tutors" className={styles.sideMenu} />}
            className={`${styles.students_tutors} ${
              activePath.startsWith('/students_tutors') ? styles.active : ''
            }`}
            id={styles.menuItemLink}>
            <img
              src={activePath.startsWith('/students_tutors') ? ActiveStIcon : StIcon}
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Students & Tutors</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/faq" className={styles.sideMenu} />}
            className={`${styles.faq} ${activePath.startsWith('/faq') ? styles.active : ''}`}
            id={styles.menuItemLink}>
            <img
              src={activePath.startsWith('/faq') ? ActiveFaqIcon : FaqIcon}
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>FAQ</span>
          </MenuItem>

          <MenuItem
            component={<Link to="/settings" />}
            className={`${styles.settings} ${
              activePath.startsWith('/settings') ? styles.active : ''
            }`}
            id={styles.menuItemLink}>
            <img
              src={activePath.startsWith('/settings') ? ActiveSettingsIcon : SettingsIcon}
              alt="Icon"
              className={styles.navIcon}
            />
            <span className={styles.menu_link}>Settings</span>
          </MenuItem>

          <MenuItem
            className={styles.logout_item}
            onClick={() => setModalShow(true)}
            id={styles.menuItemLink}>
            <img src={LogOutIcon} alt="Icon" className={styles.logoutIcon} />
            <span className={styles.menu_logout}>Logout</span>
          </MenuItem>
        </Menu>
      </Sidebar>
      <LogOutModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default SideNavBar;
