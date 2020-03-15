import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import "./RegistrationTemplate.css";

const RegistrationTemplate = ({ basketItems, courseItems }) => {
  return (
    <div className="layout-default">
      <nav className="navbar navbar-expand-lg navbar-light 
        bg-white fixed-top head-navigation nav-down">
        <div className="container">
          <div>
            <img src="https://cupjoo.github.io/assets/images/logo.png" 
              alt="오지는 컴퓨터 공부"/>
            <h4>오지는 캠퍼스</h4>
          </div>
          <div><a href="/">최준영</a>님 환영합니다!</div>
        </div>
      </nav>

      <div className="site-content">
        <div className="container">
          <section className="main-heading">
            <h2>수강신청 페이지</h2>
          </section>

          <section className="basket-box">
            <div className="section-title">
              <h2>
                <span>장바구니 목록</span>
              </h2>
            </div>
            {basketItems}
          </section>

          <section className="course-box">
            <div className="section-title">
              <h2>
                <span>강좌 목록</span>
              </h2>
            </div>
            {courseItems}
          </section>

          <footer className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 text-center text-lg-left">
                  Copyright @ 2020 <a target="_blank" rel="noopener noreferrer" 
                  href="https://cupjoo.github.io">오지는 컴퓨터 공부</a>
                </div>
                <div className="col-md-6 col-sm-6 text-center text-lg-right">
                  <FontAwesomeIcon icon={faGithub}/>
                  <a className="ml-1" target="_blank" rel="noopener noreferrer" 
                    href="https://github.com/cupjoo/course-registration">
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTemplate;
