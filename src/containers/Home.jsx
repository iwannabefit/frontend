import React from 'react';
import { Link } from '@reach/router';
import Layout from './Layout';
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
          <button>Watch Now</button>
        </div>
        <div className="slider">
          <figure className="slider__img">
            <img src="" alt="" />
          </figure>
        </div>
      </div>
      <div className="Layout__categories">Categorias || Filtros </div>
      <div className="Layout__populars">Populares</div>
    </div>
  </Layout>
);

export default Home;
