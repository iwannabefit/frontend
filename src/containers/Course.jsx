import React from 'react';
import { Link } from '@reach/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Course.scss';

const Course = () => {
  return (
    <>
      <Header></Header>

      <main className="Main">
        <section className="program">
          <div className="program__videoplayer"></div>
          <div className="program__desciption">
            <div className="program__desciption--title-Icons">
              <p className="program__desciption--title">Cardio</p>
              <div className="program__desciption--Icons"></div>
            </div>
            <div className="program__desciption--info">
              <p className="program__desciption--info--time">Time</p>
              <p className="program__desciption--info--coach">Instructor</p>
              <p className="program__desciption--info--equipament">
                Equipament:None
              </p>
            </div>
            <div className="program__desciption--description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

        <section className="weeks__container">
          <div className="weeks__container__week1">

            <div className="weeks__container__titles">
              <p className="weeks__container-week1__titles--title">
                  Week 1
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                    7 Episodes
                  </p>
                  <figure className="weeks__container-week1__titles__episodes--img">
                    <img src="" alt=""/>
                  </figure>
                </div>
            </div>

             
            <div className="weeks__container-week1__videosContainer">
              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>

              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>

              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>


              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>


              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>


              <div className="weeks__container-week1__videosContainer__card">
                <div className="weeks__container-week1__videosContaine__card-container">
                  <p className="weeks__container-week1__videosContaine__card-container--title">
                    nombre de la clase
                  </p>
                  <p className="weeks__container-week1__videosContaine__card-container--time">
                    04:20 min.
                  </p>
                </div>
                
              </div>


             

            </div>
          </div>

          <div className="weeks__container__week_">

          </div>

        </section>
        </section>

        <section className="Tutorials">
          <div className="tutorials_container">

          </div>
        </section>
      </main>

      <Footer />
      <Link to="/">Go home</Link>
    </>
  );
};

export default Course;
