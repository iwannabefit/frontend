import React from 'react';
import { Link } from '@reach/router';
import '../styles/containers/Course.scss';
import Layout from './Layout';
import favs from '../assets/static/favIcom.svg'
import like from '../assets/static/likeIcon.svg'
import comment from '../assets/static/comment.svg'

const Course = () => {
  return (
    <Layout>
      <main className="Main">
        <section className="program">
          <div className="program__videoplayer"></div>
          <div className="program__desciption">
            <div className="program__desciption--title-Icons">
              <p className="program__desciption--title">Cardio</p>
              <div className="program__desciption--Icons">
                <a href="" className="program__desciption--Icons--like">
                  <img src={like} alt=""/>
                </a>
                <a href="" className="program__desciption--Icons--favs">
                  <img src={favs} alt=""/>
                </a>
                <a href="" className="program__desciption--Icons--comments">
                  <img src={comment} alt=""/>
                </a>
              </div>
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
                  <a href="" className="weeks__container-week1__titles__episodes--triangle">
                    <div className="weeks__container-week1__titles__episodes--triangle--btn">
                    </div>
                  </a>
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

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 2
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 3
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 4
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 5
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 6
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

          <div className="weeks__container__weeks">
            <div className="weeks__container__titles">
                <p className="weeks__container-week1__titles--title">
                    Week 7
                </p>
                <div className="weeks__container-week1__titles__episodes">
                  <p className="weeks__container-week1__titles__episodes--tx">
                      7 Episodes
                  </p>
                  <a href="" className="weeks__container-week1__titles__episodes--triangle-closed">
                    <div className="weeks__container-week1__titles__episodes--triangle-closed--btn">
                    </div>
                  </a>
                </div>
            </div>
          </div>

        </section>
        </section>

        <section className="tutorials">

          <div className="tutorials_container-expand">
            <div className="tutorials_container-expand__titles">
              <p className="tutorials_container-expand__titles--p">
                Warm-up
              </p>
              <div className="tutorials_container-expand__titles--classes">
                <p className="tutorials_container-expand__titles--classes--p">
                  10 Exercises
                </p>
                <a href="" className="tutorials_container-expand__titles--classes--triangle">
                  <div className="tutorials_container-expand__titles--classes--triangle--btn">
                  </div>
                </a>
              </div>
            </div>
            <div className="tutorials_container-expand__card-Container">
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="tutorials_container-close">
            <div className="tutorials_container-close__titles">
              <p className="tutorials_container-close__titles--p">
                Stretch
              </p>
              <div className="tutorials_container-close__titles--classes">
                <p className="tutorials_container-close__titles--classes--p">
                  12 Exercises
                </p>
                <a href="" className="tutorials_container-close__titles--classes--triangle">
                  <div className="tutorials_container-close__titles--classes--triangle--btn">

                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="tutorials_container-close">
            <div className="tutorials_container-close__titles">
              <p className="tutorials_container-close__titles--p">
                Round 1
              </p>
              <div className="tutorials_container-close__titles--classes">
                <p className="tutorials_container-close__titles--classes--p">
                  16 Exercises
                </p>
                <a href="" className="tutorials_container-close__titles--classes--triangle">
                  <div className="tutorials_container-close__titles--classes--triangle--btn">

                  </div>
                </a>
              </div>
            </div>
          </div>


          <div className="tutorials_container-expand">
            <div className="tutorials_container-expand__titles">
              <p className="tutorials_container-expand__titles--p">
                Round 2
              </p>
              <div className="tutorials_container-expand__titles--classes">
                <p className="tutorials_container-expand__titles--classes--p">
                  10 Exercises
                </p>
                <a href="" className="tutorials_container-expand__titles--classes--triangle">
                  <div className="tutorials_container-expand__titles--classes--triangle--btn">
                  </div>
                </a>
              </div>
            </div>
            <div className="tutorials_container-expand__card-Container">
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>
              <div className="tutorials_container-expand__card">
                <figure className="tutorials_container-expand__card--img">
                  <img src="" alt=""/>
                </figure>
                <div className="tutorials_container-expand__card__info">
                  <p className="tutorials_container-expand__card__info--name">
                    Nane of exercise
                  </p>
                  <p className="tutorials_container-expand__card__info--time">
                    10 seg.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="tutorials_container-close">
            <div className="tutorials_container-close__titles">
              <p className="tutorials_container-close__titles--p">
                Stretch
              </p>
              <div className="tutorials_container-close__titles--classes">
                <p className="tutorials_container-close__titles--classes--p">
                  16 Exercises
                </p>
                <a href="" className="tutorials_container-close__titles--classes--triangle">
                  <div className="tutorials_container-close__titles--classes--triangle--btn">

                  </div>
                </a>
              </div>
            </div>
          </div>
          






        </section>
      </main>
    </Layout>
  );
};

export default Course;
