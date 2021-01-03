import React from "react";
import "./Home.css";
import Product from "./Product";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function Home() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__bannerImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home_row">
          <animated.div
            className="product"
            onMouseMove={({ clientX: x, clientY: y }) =>
              set({ xys: calc(x, y) })
            }
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
          >
            <Product
              key={1}
              id={123426}
              title="PS5 para revender loco!!"
              price={499.99}
              image="https://m.media-amazon.com/images/I/61U4UgkHd7L._AC_UY654_FMwebp_QL65_.jpg"
              rating={5}
            />
          </animated.div>

          <Product
            key={2}
            id={12342}
            title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
            price={29.99}
            image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY654_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            key={3}
            id={12334}
            title="NATIONAL GEOGRAPHIC Earth Science Kit - Over 15 Science Experiments & STEM Activities for Kids, Includes Crystal Growing Kit, Volcano Science Kit"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91AQBSotB2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            key={4}
            id={9837}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            key={5}
            id={9966}
            title="Microservices security"
            price={39.99}
            image="https://m.media-amazon.com/images/I/410tcmxFr7L._AC_SL520_.jpg"
            rating={1}
          />
          <Product
            key={6}
            id={63745}
            title="Learning Java"
            price={49.99}
            image="https://m.media-amazon.com/images/I/91gRSdr8B2L._AC_SY400_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
            key={7}
            id={343490}
            title="Hacking - The art of exploitation"
            price={29.99}
            image="https://m.media-amazon.com/images/I/91UlU666haL._AC_SY400_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
