import React from "react";
import Link from "next/link";
import NavMenue from '@/app/Components/NavMenue/NavMenue';

function Course() {
  return (
    <div>
      <section className="Sub-header">
        <nav>
          <a href="index.html" className="logo">
            Xplore <i className="fab fa-staylinked"></i>kill
          </a>
          <NavMenue />
        </nav>
        <h1>Our Courses</h1>
      </section>

      {/* Course Section Start */}
      <section className="course">
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="course-col">
            <h3>Undergraduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Graduate Programs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
          <div className="course-col">
            <h3>Adult Learning & Degree Completion</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non.
            </p>
          </div>
        </div>
      </section>
      {/* Course Section End */}

      {/* Best Courses Section Start */}
      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <div className="facilities-col">
            <img src="/img/course1.png" alt="Web Development" />
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="facilities-col">
            <img src="/img/course2.png" alt="Artificial Intelligence" />
            <h3>Artificial Intelligence</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="facilities-col">
            <img src="/img/course3.png" alt="Data Science" />
            <h3>Data Science</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      {/* Best Courses Section End */}

      {/* Footer Section Start */}
      <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima
          incidunt odio nam facilis, eligendi
          <br />
          Itaque fugiat cupiditate consectetur. Aliquid ab deserunt
          exercitationem, illum molestiae dolorem.
        </p>

        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>
          Made with <i className="fas fa-heart"></i> by{" "}
          <a href="#">Sagar Developer</a>
        </p>
        <p>
          Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights
          Reserved
        </p>
      </section>
      {/* Footer Section End */}
    </div>
  );
}

export default Course;
