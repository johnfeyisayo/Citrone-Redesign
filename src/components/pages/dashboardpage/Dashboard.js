import React from 'react';
import NavBar from '..//dashboardpage/db_ components/NavBar';
import SideNavBar from '..//dashboardpage/db_ components/SideNavBar';
import Main from '..//dashboardpage/db_ components/Main';
import styles from './db_ components/Dashboard.module.css';

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
