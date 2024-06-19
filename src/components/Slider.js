"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Height } from "@mui/icons-material";

function Slider() {
  return (
    <Carousel
      showStatus={false}
      infiniteLoop
      showThumbs={false}
      style={{ height: "50%" }}
      showArrows={true}
      showIndicators={false}
    >
      <div style={{ alignSelf: "center" }}>
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px" }}
        />
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "80px" }}
        />
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "80px" }}
        />
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "80px" }}
        />
      </div>
      <div>
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "10px" }}
        />
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "10px" }}
        />
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "10px" }}
        />
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "10px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px" }}
        />
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet. Et quam eveniet eum natus quam ab commodi
          dicta. Est quidem assumenda aut illum officiis ea nihil suscipit ut
          facilis voluptatem est nesciunt dicta in veniam quam qui
          exercitationem fugit! 33 nulla accusamus aut quia omnis et placeat
          modi sed omnis modi et repellendus unde. Et vitae voluptate et modi
          sint qui similique nostrum.
        </p>
      </div>
    </Carousel>
  );
}

export default Slider;
