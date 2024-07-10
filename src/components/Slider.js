"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Slider() {
  return (
    <Carousel
      transitionTime={300}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      showArrows={true}
    >
      <div key={"diapo1"}>
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
      </div>
      <div>
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
        <img
          src="/assets/image/vide.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px", marginLeft: "30px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "240px" }}
        />
        <p
          style={{
            color: "white",
            textAlign: "start",
            alignContent: "center",
            fontSize: "0.95rem",
            width: "50rem",
            marginLeft: "20px",
          }}
        >
          Bonjour et bienvenue sur le site de Stroke Recover. <br />
          Je m&apos;appelle Quentin Kerzerho et je suis étudiant en
          développement web. À la fin de ma formation, j&apos;ai voulu continuer
          mon apprentissage dans un projet qui avait du sens pour moi. <br />
          Ce projet est venu car mon père a subi un AVC et j&apos;ai vu les
          difficultés qu&apos;il a rencontrées pour retrouver ses capacités
          cognitives. J&apos;ai donc décidé de créer ce jeu pour aider les
          personnes qui ont subi un AVC à retrouver leurs capacités.
          <br /> J&apos;espère que ce jeu vous aidera à retrouver vos capacités
          cognitives et à vous sentir mieux.
          <br /> N&apos;hésitez pas à me contacter si vous avez des questions ou
          des suggestions.
          <br /> Merci et à bientôt. Vous pouvez me retrouver sur LinkedIn
          :&nbsp;
          <a
            href="https://www.linkedin.com/in/quentin-kerzerho/"
            target="_blank"
            rel="noopener noreferrer" // Added for security reasons
          >
            Quentin Kerzerho
          </a>
        </p>
      </div>
    </Carousel>
  );
}

export default Slider;

const slideAnimationHandler = (props, state) => {
  const transitionTime = props.transitionTime + "ms";
  const transitionTimingFunction = "ease-in-out";
  const currentIndex = state.selectedItem; // Utilisez l'index actif de l'état pour déterminer la position de la diapositive

  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    top: 0,
    transitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
      transform: `translateX(-${currentIndex}px)`, // Appliquer la translation basée sur l'index actif
      msTransform: `translateX(-${currentIndex}px)`,
      WebkitTransform: `translateX(-${currentIndex}px)`,
      MozTransform: `translateX(-${currentIndex}px)`,
      OTransform: `translateX(-${currentIndex}px)`,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, top: 0, bottom: 0, left: 0, right: 0 },
    prevStyle: { ...slideStyle },
  };
};

// const rotateAnimationHandler = (props, state) => {
//   const transitionTime = props.transitionTime + "ms";
//   const transitionTimingFunction = "ease-in-out";
//   let slideStyle = {
//     position: "absolute",
//     display: "block",
//     minHeight: "100%",
//     top: 0,
//     transitionTimingFunction: transitionTimingFunction,
//     msTransitionTimingFunction: transitionTimingFunction,
//     MozTransitionTimingFunction: transitionTimingFunction,
//     WebkitTransitionTimingFunction: transitionTimingFunction,
//     OTransitionTimingFunction: transitionTimingFunction,
//     zIndex: state.previousItem === state.selectedItem ? "1" : "-2",
//     opacity: state.previousItem === state.selectedItem ? "1" : "0",
//     WebkitTransitionDuration: transitionTime,
//     MozTransitionDuration: transitionTime,
//     OTransitionDuration: transitionTime,
//     transitionDuration: transitionTime,
//     msTransitionDuration: transitionTime,
//   };
//   return {
//     slideStyle,
//     selectedStyle: {
//       ...slideStyle,
//       opacity: 1,
//       position: "relative",
//     },
//     prevStyle: {
//       ...slideStyle,
//       transformOrigin: " 0 100%",
//       transform: `translateX(${"500px"})`,
//       opacity: "0",
//     },
//   };
// };

{
  /* <div key={"diapo1"} style={{ alignSelf: "center" }}>
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px" }}
        />
        <img
          src="/assets/image/july.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px" }}
        />

      </div>
      <div>
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px", marginLeft: "10px" }}
        />

      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="/assets/image/quentin1.jpg"
          alt="Titre Stroke Recover"
          style={{ width: "auto", height: "250px" }}
        />
        <p
          style={{
            color: "white",
            textAlign: "start",
            alignContent: "center",
            width: "50rem",
            marginLeft: "20px",
          }}
        >
          Bonjour et bienvenue sur le site de Stroke Recover. <br />
          Je m'appelle Quentin Kerzerho et je suis étudiant en développement
          web. À la fin de ma formation, j'ai voulu continuer mon apprentissage
          dans un projet qui avait du sens pour moi. <br />
          Ce projet est venu car mon père a subi un AVC et j'ai vu les
          difficultés qu'il a rencontrées pour retrouver ses capacités
          cognitives. J'ai donc décidé de créer ce jeu pour aider les personnes
          qui ont subi un AVC à retrouver leurs capacités.
          <br /> J'espère que ce jeu vous aidera à retrouver vos capacités
          cognitives et à vous sentir mieux.
          <br /> N'hésitez pas à me contacter si vous avez des questions ou des
          suggestions. Je serai ravi de vous aider.
          <br /> Merci et à bientôt. Vous pouvez me retrouver sur LinkedIn
          :&nbsp;
          <a
            href="https://www.linkedin.com/in/quentin-kerzerho/"
            target="_blank"
            rel="noopener noreferrer" // Added for security reasons
          >
            Quentin Kerzerho
          </a>
        </p>
      </div> */
}
