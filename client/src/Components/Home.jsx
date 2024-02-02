import { useState, useEffect } from "react";
import Swiper from 'react-id-swiper';
import { Link } from "react-router-dom";
import s1 from "../images/s1.jpeg";
import s2 from "../images/s2.webp";
import s3 from "../images/s3.jpeg";
import s4 from "../images/s4.webp";
import s5 from "../images/s5.webp";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import n7 from "../images/n7.jpg";
import n9 from "../images/n9.jpg";
import n10 from "../images/n10.jpg";
import z from "../images/z.jpeg";
import le from "../images/le.jpeg";
import nk from "../images/nk.webp";
import adidas from "../images/adidas.webp";
import ch1 from "../images/ch1.jpeg";
import p1 from "../images/p1.jpg";
import p2 from "../images/p2.jpg";
import s from "../images/s.png";
import n from "../images/n.jfif";
import za from "../images/za.jpg";
import ad from "../images/ad.png";
import a from "../images/a.png";
import t from "../images/t.png";
import p4 from "../images/p4.jpg";
import b5 from "../images/b5.jpg";
import b10 from "../images/b10.jpg";
import gif from "../images/gif.gif";
import gif1 from "../images/gif1.gif";
import ji2 from "../images/ji2.jpg";


import Navbar from "./Navbar";
export default function Home() {
  
  return (
    <>
      <div className="container-fluid home">
        <main className="main">
          <section className="card-lg__container">
            <p className="card__text-sm">
              Welcome to Ezymart – Your Ultimate Shopping Destination!
            </p>
            <h1 className="card__text-lg">Where Convenience Meets Quality</h1>
            <p className="card__text-md">
              Discover a diverse range of products, unbeatable deals, and secure
              shopping. With fast delivery and responsive customer support, we
              make your shopping experience easy and enjoyable. Explore our
              categories and join the Ezymart community for exclusive offers.
            </p>
            <a href="#" className="card__btn">
              Latest Arrivals
            </a>
          </section>
          <section className="card-sm__container">
            <section className="card-sm c1">
              <p className="card__text-sm">Walk in Style and Comfort</p>
              <h1 className="card__text-lg">Puma</h1>
            </section>
            {/*- END: CARD -*/}
            {/*- START: CARD -*/}
            <section
              className="card-sm c2"
              style={{
                backgroundPosition: "center right",
              }}
            >
              <p className="card__text-sm">upscale fashion</p>
              <h1 className="card__text-lg">Adidas</h1>
            </section>

            <section className="card-sm c3">
              <p className="card__text-sm">jeans and casual wear</p>
              <h1 className="card__text-lg">Levi's</h1>
            </section>

            <section className="card-sm c4">
              <p className="card__text-sm">wide range of stylish</p>
              <h1 className="card__text-lg">ASOS </h1>
            </section>
            {/*- END: CARD -*/}
          </section>
        </main>

        <div className="container mt-4">
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <img
                  src={c1}
                 style={{objectFit:"cover"}}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="row mt-4">
                <img
                  src={p1}
                  style={{objectFit:"cover"}}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            {/* carousal */}
            <div className="col-sm-4">
              <div className="row">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={n10}
                      className="d-block w-100"
                      style={{objectFit:"cover"}}
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={ji2}
                      className="d-block w-100"
                      style={{objectFit:"cover"}}

                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={p2}
                      style={{objectFit:"cover"}}
                      className="d-block w-100"
                      v
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            
            <div className="row mt-2">
                <img
                  src={gif1}
                  // height={290}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              </div>
            <div className="col-sm-4">
              <div className="row">
                <img
                  src={b5}
                  // height={290}
                  style={{objectFit:"cover"}}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="row mt-4">
                <img src={p4} 
                style={{objectFit:"cover"}}
                // height={290} 
                className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner cr">
              <div className="carousel-item active">
                <img src={s1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={s2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div> */}

        {/* slide */}

        <div className="slider mt-3">
          <div className="slide-track">
            <div className="slide">
              <img
                src={s}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={ad}
  
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={za}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={a}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={n}
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src={t}
                height={100}
                width={250}
                alt=""
              />
            </div>
            {/* <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                height={100}
                width={250}
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                height={100}
                width={250}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
