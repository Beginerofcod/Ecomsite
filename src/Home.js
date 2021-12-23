import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/*Product id, title, price, rating , image */}
        <img
          className="home__image"
          src="https://image.shutterstock.com/image-photo/szczecin-polandnovember-2018-amazon-logistics-260nw-1247288113.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />

          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12313"
            title="adasd"
            price={11.9}
            rating={3}
            image="https://m.media-amazon.com/images/I/816IXEhelsL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
