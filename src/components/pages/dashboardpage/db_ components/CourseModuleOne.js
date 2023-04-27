import React from 'react';
import styles from './/Dashboard.module.css';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import { Link } from 'react-router-dom';
import FileIcon from '..//images/file.svg';
import CalendarIcon from '..//images/CalendarNote.svg';
import Star from '..//images/stars.svg';
import TimiPic from '..//images/comment-pic.png';

const CourseModuleOne = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.wrapper}>
        <SideNavBar />
        <div className={styles.courseModuleOneWrapper}>
          <div>
            <h4 className={styles.courseIntro}>
              <Link to="/course-content" className={styles.courseLink}>
                Course Contents
              </Link>
              <span className={styles.greaterThan}> &gt; </span>
              <span className={styles.courseModule}>Module 1</span>
            </h4>
            <div className={styles.moduleFlex}>
              <div>
                <h1 className={styles.moduleLessons}>Module 1 lessons;</h1>
              </div>
              <div>
                <button className={styles.btnLesson}>Lesson completed</button>
              </div>
            </div>

            <div className={styles.cardCourseContainer}>
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 1: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 2 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 2: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 3 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 3: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              {/* Lesson 4 */}
              <div className={styles.moduleCard}>
                <p className={styles.moduleDate}>13/08/22</p>
                <h4 className={styles.moduleCourseTitle}>
                  Lesson 4: Design Thinking process and UCD techniques
                </h4>
                <p className={styles.moduleCourseText}>
                  In our previous classes, we defined Product Design as the process designers use to
                  blend user needs with business goals to help brands make consistently successful
                  products. This time we are going a step further, we will learn about the career
                  landscape, and the foundation of great products and revisit the phases of the
                  design thinking process.
                </p>
                <div className={styles.courseLinkFlex}>
                  <div className={styles.courseLessonLink}>
                    <object data={FileIcon} className={styles.moduleIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span>Lesson slide here(PDF)</span>
                    </Link>
                  </div>
                  <div>
                    <object data={CalendarIcon}></object>
                    <Link to="" className={styles.lessonLink}>
                      <span className={styles.courseAssignmentLink}>Assignment here(PDF)</span>
                    </Link>
                  </div>
                </div>

                <div className={styles.lessonImage}></div>
              </div>

              <div className={styles.moduleCommentCard}>
                <div className={styles.commentsFlex}>
                  <div>
                    <h2 className={styles.commentTitle}>Comments</h2>
                  </div>
                  <div>
                    <p className={styles.ratingText}>Leave a Rating</p>
                    <object data={Star} className={styles.starComment}></object>
                  </div>
                </div>

                <div className={styles.moduleComment}>
                  <img src={TimiPic} alt="" className={styles.commentPic} />

                  <input
                    className={styles.commentSearchBar}
                    placeholder="Leave a comment about the module"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseModuleOne;