import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Logo from '../images/logo-spin.png';
import BellIcon from '../images/bell-icon.svg';
import ProfilePic from '../images/profile-pic.png';
import DropDownArrow from '../images/caret-down.svg';
import styles from './/Dashboard.module.css';
import { Menu, useProSidebar } from 'react-pro-sidebar';
import BarIcon from '../images/fa-bars.svg';
import { MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import SwitchComponent from '../images/switch.png';
import DropdownProfilePic from '../images/profile-pic.png';
import ProfileIcon from '../images/profile-icon.svg';
import SettingsIcon from '../images/settings-filled.svg';
import Border from '../images/border.svg';
import LogOutIcon from '../images/logout-icon.svg';
import Polygon from '../images/polygon.svg';
import Notification from './Notification';

const NavBar = () => {
  const { collapseSidebar } = useProSidebar();

  const [collapsed, setCollapsed] = useState(false);

  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const dropdownArrowClass = open ? styles.dropdown_arrow_up : styles.dropdown_arrow_down;

  const container = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (container.current && !container.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [container]);

  const [bellOpen, setBellOpen] = useState(false);

  const handleBellIconClick = () => {
    setIsBellOpen(!isBellOpen);
    setBellOpen(!bellOpen);
  };

  const [isBellOpen, setIsBellOpen] = useState(false);

  return (
    <div>
      <header className={styles.top_navbar}>
        <div className={styles.right_nav}>
          <Menu>
            <img
              src={BarIcon}
              alt="Icon"
              className={styles.bar_icon}
              onClick={() => {
                collapseSidebar();
                setCollapsed(!collapsed);
              }}
            />{' '}
          </Menu>
          <div className={styles.logo_container}>
            <img src={Logo} alt="Logo Citrone" className={styles.logo_img} />
            <h1 className={styles.title}>Citrone</h1>
          </div>
        </div>

        <div className={styles.left_nav} ref={container}>
          <div className={styles.leftNav}>
            <div>
              <img
                src={BellIcon}
                className={`${styles.bell_icon} ${isBellOpen ? styles.bellIconToggle : ''}`}
                onClick={() => handleBellIconClick()}
              />
            </div>

            <div className={styles.profileArrow} onClick={() => handleButtonClick()}>
              <img src={ProfilePic} className={styles.profile_pic} alt="Profile Picture" />
              <img
                src={DropDownArrow}
                id={styles.dropdown_arrow}
                className={`${styles.dropdown_arrow} ${dropdownArrowClass}`}
              />
            </div>
          </div>
          {bellOpen && (
            <>
              <Notification />
            </>
          )}
          {open && (
            <>
              <img src={Polygon} alt="icon" className={styles.polygon} />
              <div className={styles.dropdownProfile}>
                <div className={styles.profileCard}>
                  <div>
                    <img src={DropdownProfilePic} alt="Profile Picture" />
                  </div>

                  <div>
                    <h2>Olurotimi Akinnagbe</h2>
                    <span className={styles.profileDropdownEmail}>Tyrantakinnagbe@gmail.com</span>
                    <span className={styles.profileDropdownCourse}>UI/UX Design</span>
                  </div>
                </div>

                <Menu>
                  <MenuItem
                    component={<Link to="/settings" />}
                    className={styles.profileMenu}
                    id={styles.profileLink}>
                    <img src={ProfileIcon} alt="Icon" />
                    <span className={styles.spanLink}>Profile Information</span>
                  </MenuItem>
                  <MenuItem component={<Link to="/settings" />} id={styles.profileLink}>
                    <img src={Border} alt="Border" className={styles.border} />
                    <img src={SettingsIcon} alt="Icon" className={styles.settingsIcon} />
                    <span className={styles.spanLink}>Settings</span>
                  </MenuItem>
                  <MenuItem component={<Link to="/settings" />} id={styles.profileLink}>
                    <img src={LogOutIcon} alt="Icon" />
                    <span className={styles.spanLink}>Log Out</span>
                  </MenuItem>
                </Menu>

                <div className={styles.colorMode}>
                  <div>
                    <p>Light/Dark Mode</p>
                  </div>
                  <div>
                    <img src={SwitchComponent} alt="Light Switch" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
