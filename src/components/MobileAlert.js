"use client";

import { useEffect, useState } from "react";

const MobileAlert = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Vérifie la taille de l'écran au chargement
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMobile) {
    return null;
  }

  return (
    <div className="flex justify-center items-center text-center h-screen">
      Ce site n&apos;est pas accessible sur mobile. Veuillez utiliser un
      ordinateur pour y accéder.
    </div>
  );
};

export default MobileAlert;
