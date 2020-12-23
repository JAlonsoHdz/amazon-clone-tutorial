import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__bannerImage"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
        />
        <div className="home_row">
          <Product
            title="All-new Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
            price={29.99}
            image="https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY654_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="NATIONAL GEOGRAPHIC Earth Science Kit - Over 15 Science Experiments & STEM Activities for Kids, Includes Crystal Growing Kit, Volcano Science Kit"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/91AQBSotB2L._AC_SX679_.jpg"
            rating={5}
          />
        </div>
        {/* Product*/}

        <div className="home_row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            title="Microservices security"
            price={39.99}
            image="https://m.media-amazon.com/images/I/410tcmxFr7L._AC_SL520_.jpg"
            rating={1}
          />
          <Product
            title="Learning Java"
            price={49.99}
            image="https://m.media-amazon.com/images/I/91gRSdr8B2L._AC_SY400_.jpg"
            rating={3}
          />
        </div>

        <div className="home_row">
          <Product
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
