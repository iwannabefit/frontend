import React from 'react';
import {Link } from "@reach/router"
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/containers/Course.scss'

const Course = () => {
  return (
    <>
      <Header></Header>

      <main className="Main">
        <section className="program">
            <div className="program__videoplayer">
            
            </div>
            <div className="program__desciption">
              <div className="program__desciption--title-Icons">
                <p className="program__desciption--title">
                    Cardio
                </p>
                <div className="program__desciption--Icons">

                </div>

                </div>
                <div className="program__desciption--info">
                    <p className="program__desciption--info--time" >Time</p>
                    <p className="program__desciption--info--coach">Instructor</p>
                    <p className="program__desciption--info--equipament">Equipament: None</p>
                </div>
                <div className="program__desciption--description">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
              </div>

            <section className="weeks">
                
            </section>
        </section>
       
        <section className="Tutorials">
            <div className="tutorials_container">
                
            </div>
        </section>
      </main>

      <Footer></Footer>
      <Link to="/">Go home</Link>
    </>
  );
};

export default Course;
