import React from 'react';
import { Link } from '@reach/router';
import Layout from './Layout';
import ArrowDesck from '../assets/react/ArrowDesck';
import '../styles/containers/Home.scss';
const Home = () => (
  <Layout>
    <div className="Home">
      <div className="hero">
        <div className="copy">
          <h1>insanity</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris{' '}
          </p>
          <p>
            <small>Lose weught</small>
            <small>8 weekends </small>
          </p>
          <button>
            Watch Now <ArrowDesck />
          </button>
        </div>
        <div className="slider">
          <figure className="slider__img">
            <img src="" alt="" />
          </figure>
        </div>
      </div>
      <div className="Categories">
        <h2 className="Categories__title">What do you want to train today</h2>
        <div className="Categories__List">
          <div className="Categories__filter"></div>
          <div className="Categories__filter"></div>
          <div className="Categories__filter"></div>
          <div className="Categories__filter"></div>
        </div>
      </div>
      <div className="Populars">
        <h3 className="Populars__title">Lose weight</h3>
        <div className="Populars__List">
          <div className="Populars__card --span2 --principal"></div>
          <div className="Populars__card --principal"></div>
          <div className="Populars__card "></div>
          <div className="Populars__card "></div>
          <div className="Populars__card "></div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
