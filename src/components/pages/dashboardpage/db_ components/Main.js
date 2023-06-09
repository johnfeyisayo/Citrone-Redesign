import React from 'react';
import SideArrow from '../images/side-arrow.svg';
import RealTime from './RealTime';
import IncompleteTask from './IncompleteTasks';
import CourseProgress from './CourseProgress';
import styles from './/Dashboard.module.css';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main className={styles.main_content}>
      <div className={styles.greetings_container}>
        <div className={styles.greetings}>
          <h1>Hello, Olurotimi Akinnagbe 👍✨</h1>
          <span>Believe you can & youre halfway done!</span>
        </div>

        <div className={styles.resume_lesson}>
          <div>
            <p className={styles.resumeLesson}>
              <Link to="/course-module-one">
                Resume previous lesson{' '}
                <span className={styles.sideArrow}>
                  <img src={SideArrow} alt="" />
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <RealTime />
      <IncompleteTask />
      <CourseProgress />
    </main>
  );
};

export default Main;
