import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import Logo from "../src/public/images/pictures/waterdrop.png";
import lap from "../src/public/images/picture/img-6.jpg";
import glas from "../src/public/images/pictures/glastx logo.jpg";
import bre from "../src/public/images/pictures/brewery logo.jpg";
import some from "../src/public/images/pictures/awesome logo.jpg";
import arrow from "../src/public/images/pictures/right-arrows.png";
import img1 from "../src/public/images/picture/img 1.jpg";
import img2 from "../src/public/images/picture/img 2.jpg";
import img3 from "../src/public/images/picture/img3.jpg";
import img4 from "../src/public/images/picture/img4.jpg";
import img5 from "../src/public/images/picture/img5.jpg";
import pic6 from "../src/public/images/pictures/people 6.jpg";
import pic5 from "../src/public/images/pictures/people 5.jpg";
import pic4 from "../src/public/images/pictures/people 4.jpg";
import { FaArrowUp, FaYoutube } from "react-icons/fa";
import { IoLeafSharp } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { IoBag } from "react-icons/io5";
import { FaLayerGroup } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Slider from "react-slick";

const App = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "2px",
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "14px",
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "-3px",
        },
      },
    ],
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt=" " />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active text-primary text-opacity-50"
                  aria-current="page"
                  href="#"
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#feature">
                  FEATURE
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tearm">
                  TEAM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  TESTIMONIAL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
            <div
              className="btn-group button"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className="btn btn-outline-primary rounded-pill px-4"
              >
                FAQ
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* download button */}
      <div className="container-fluid text-center bg-light pb-4">
        <div className="pt-5">
          <h2>For Business,SaaS and Apps</h2>
        </div>
        <div className="pt-4">
          <button type="button" className="btn btn-primary rounded-pill px-4">
            Downlode Now
          </button>
        </div>
      </div>
      {/*  */}
      <div className="container-fluid" id="service">
        <div className="text-center pt-4">
          <h1>Our Services</h1>
        </div>
        <div className="row pt-5">
          <div className="px-3 col-lg-4">
            <div className="d-flex">
              <IoBag size={32} />
              <h4 className="px-3">WEB DEVELOPMENT</h4>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur iure, sed porro, culpa asperiores officia esse recusandae
              quasi at, inventore quia veniam quas. Distinctio fugit id omnis
              tempore expedita.
            </p>
          </div>
          <div className="px-3 col-lg-4">
            <div className="d-flex">
              <VscGraph size={32} />
              <h4 className="px-3">GRAPHIC DESIGN</h4>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur iure, sed porro, culpa asperiores officia esse recusandae
              quasi at, inventore quia veniam quas. Distinctio fugit id omnis
              tempore expedita.
            </p>
          </div>
          <div className="px-3 col-lg-4">
            <div className="d-flex">
              <IoMdSettings size={32} />
              <h4 className="px-3">APP DEVELOPMENT</h4>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              tenetur iure, sed porro, culpa asperiores officia esse recusandae
              quasi at, inventore quia veniam quas. Distinctio fugit id omnis
              tempore expedita.
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="container-fluid pt-5" id="feature">
        <div className="row bg-light">
          <div className="col-lg-6">
            <h2 className="text-center pt-4">Learn More About Us</h2>
            <div className="p-4">
              <div className="vector">
                <div className="set-logo">
                  <div className="d-flex">
                    <FaLayerGroup size={32} />
                    <h4 className="px-3">BootStrap4</h4>
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita odit labore fugiat. Id asperiores nostrum labore
                    pariatur reiciendis! Quisquam minus dicta maiores possimus
                    suscipit fugit ipsum iusto quos inventore aliquam.
                  </p>
                </div>
                <div className="set-logo">
                  <div className="d-flex">
                    <IoLeafSharp size={32} />
                    <h4 className="px-3">100% free</h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Impedit, accusamus expedita fugiat cum ab, doloribus sunt
                    quis mollitia totam nostrum, animi officia fuga ea
                    recusandae amet laudantium quod? Nesciunt, itaque.
                  </p>
                </div>
                <div className="set-logo">
                  <div className="d-flex">
                    <IoMdSettings size={32} />
                    <h4 className="px-3">Responsive</h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium iusto natus blanditiis magnam veniam aliquam
                    provident quidem, culpa voluptatibus alias at ut pariatur
                    excepturi laborum vero, voluptatem assumenda modi vel.
                  </p>
                </div>
                <div className="set-logo">
                  <div className="d-flex">
                    <IoBag size={32} />
                    <h4 className="px-3">Easy to use</h4>
                  </div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam debitis odit quasi officia at quidem. Ducimus saepe
                    tempore, dignissimos quis quod recusandae ea nostrum amet
                    praesentium perferendis earum aspernatur nobis!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={lap} width="100%" height="100%" />
          </div>
        </div>
      </div>
      {/* card */}
      <div className="container">
        <h1 className="text-center pt-4">Our Team</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4 caar-tag pt-2">
            <div className="caar">
              <Card>
                <Card.Img variant="top" src={pic5} alt="" />
                <Card.Body>
                  <h4>
                    <b>PAUL KOWALSY</b>
                  </h4>

                  <p>Lead Designer</p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 caar-tag pt-2">
            <div className="caar">
              <Card>
                <Card.Img variant="top" src={pic4} alt="" />
                <Card.Body>
                  <h4>
                    <b>PAUL KOWALSY</b>
                  </h4>
                  <p>Lead Designer</p>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 caar-tag pt-2">
            <div className="caar">
              <Card>
                <Card.Img variant="top" src={pic6} alt="" />
                <Card.Body>
                  <h4>
                    <b>RAFAEL BASILLA</b>
                  </h4>
                  <p>Developer</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* logo */}
      <div className="container-fluid bg-light mt-5" id="testimonial">
        <h2 className="text-center pt-4">As Seen On</h2>
        <div className="row pt-5">
          <div className="col-lg-3 col-md-3 text-center p-4">
            <img src={glas} width="150px" height="100px" />
          </div>
          <div className="col-lg-3 col-md-3 text-center p-4">
            <img src={bre} width="150px" height="100px" />
          </div>
          <div className="col-lg-3 col-md-3 text-center p-4">
            <img src={some} width="150px" height="100px" />
          </div>
          <div className="col-lg-3 col-md-3 text-center p-4">
            <img src={bre} width="150px" height="100px" />
          </div>
        </div>

        <div className="container-fluid bg-light ">
          <h2 className="text-center mt-5 pt-5">Start For Free</h2>
          <i className="bi bi-facebook"></i>
          <p className="text-center">
            Existing customized ideas through client based deliverables
            <br />
            compellingly unleash fully tested outsourcing
          </p>
          <div className="text-center">
            <input
              placeholder="Email Address"
              style={{
                borderRadius: 50,
                width: 300,
                height: 40,
                borderColor: "blue",
              }}
            />
          </div>
          <div
            className="btn-groud w-40 pt-3 text-center pb-4"
            role="group"
            aria-label="Basic example"
          >
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill px-4"
            >
              <div className="pb-1">
                <img src={arrow} width="15px" height="15px" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* carosel */}
      <div className="p-4 0 4 0">
        <div className="container slider-container bg-dark p-5">
          <Slider {...settings}>
            <div>
              <img
                alt=" "
                src={img1}
                className="p-3"
                width="300px"
                height="300px"
              />
            </div>
            <div>
              <img
                alt=" "
                src={img2}
                className="p-3"
                width="300px"
                height="300px"
              />
            </div>
            <div>
              <img
                alt=" "
                src={img5}
                className="p-3"
                width="300px"
                height="300px"
              />
            </div>
            <div>
              <img
                alt=" "
                src={img4}
                className="p-3"
                width="300px"
                height="300px"
              />
            </div>
            <div>
              <img
                alt=" "
                src={img3}
                className="p-3"
                width="300px"
                height="300px"
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* footer */}
      <div className="container-fluid bg-black text-white" id="pricing">
        <div className="row p-5">
          <div className="col-lg-3">
            <img src={Logo} />
            <p className="fs-5">
              Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quisquam
              expcepturi quasi, ipsam voluptem.
            </p>
          </div>
          <div className="col-lg-3 pt-2 pl-5 deco">
            <h3>Company</h3>
            <div className="d-flex flex-column fs-5">
              <a href="#">Press Releases</a>
              <a href="#">Mission</a>
              <a href="#">Strstegy</a>
            </div>
          </div>
          <div className="col-lg-3 pt-3 deco">
            <h3>About</h3>
            <div className="d-flex flex-column fs-5">
              <a href="#">Career</a>
              <a href="#">Tearm</a>
              <a href="#">Clients</a>
            </div>
          </div>
          <div className="col-lg-3 pt-3 fa-lg ">
            <h3>Find Us On</h3>

            <FaFacebookSquare size={25} />
            <FaInstagram size={25} />
            <FaSquareXTwitter size={25} />
            <FaYoutube size={25} />
          </div>
        </div>
      </div>
      <div className="allright">
        <div className="text-center">
          <span>Nexware All Right Reserved</span>
        </div>
      </div>
      <div>
        <a href="#" className="back-to-top bg-primary">
          <FaArrowUp color="black" />
        </a>
      </div>
    </div>
  );
};

export default App;
