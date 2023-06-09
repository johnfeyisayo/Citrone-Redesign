import React from 'react';
import NavBar from './db_ components/NavBar';
import SideNavBar from './db_ components/SideNavBar';
import styles from './db_ components/Dashboard.module.css';

const students_tutors = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
      </div>
    </div>
  );
};

export default students_tutors;
