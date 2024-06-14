import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import BasicButtons from "@/src/components/BasicButtons";
import TextIntro from "@/src/components/TextIntro";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import ChoiceDiapo from "@/src/components/ChoiceDiapo";
import Image from "next/image";

// Supports weights 300-700
import "@fontsource-variable/quicksand";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <>
      <header className="flex items-center">
        <div className="ml-auto mt-0">
          <button className="w-52 h-10 border-2 border-black rounded-full m-10">
            <p
              style={{ fontFamily: "Quicksand Variable" }}
              className="text-xs font-bold"
            >
              Accèder à son espace client
            </p>
          </button>
        </div>
      </header>
      <div style={{ marginTop: "-4em" }} className="flex-1 flex justify-center">
        <Image
          src="/assets/image/titrestrokerecover.png"
          alt="Titre Stroke Recover"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute left-36 top-20">
        <Image
          src="/assets/image/puzzle.png"
          alt="Titre Stroke Recover"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col items-center mt-10 relative w-auto">
        <p
          style={{
            fontFamily: "Quicksand Variable",
            fontSize: "3rem",
            // textShadow:
            //   "-1.5px -1.5px 0px black, -1.5px 0px 0px black,-1.5px 1.5px 0px black,0px 1.5px 0px black, 1.5px 1.5px 0px black, 1.5px 0px 0px black, 1.5px -1.5px 0px black, 0px -1.5px 0px black",
          }}
          className="font-bold text-center absolute tracking-tighter"
        >
          Réveillez la parole, ravivez les &#58;
        </p>
        <p
          style={{
            fontFamily: "Quicksand Variable",
            fontSize: "3rem",
            top: "3.5rem",
            marginRight: "20rem",
          }}
          className="font-bold justify-center relative tracking-tighter"
        >
          souvenirs &#58;
        </p>
        <p
          style={{
            fontFamily: "Quicksand Variable",
            fontSize: "3rem",
            marginLeft: "15rem",
            marginTop: "3.5rem",
            WebkitTextStroke: "5px black",
            textShadow: "6px 6px 0px black",
          }}
          className="font-bold text-center mt-10 absolute text-white tracking-tighter"
        >
          le jeu post-AVC
        </p>
        <p
          style={{
            fontFamily: "Quicksand Variable",
            fontSize: "3rem",
            marginTop: "3.5rem",
            marginLeft: "15rem",
          }}
          className="font-bold text-center mt-10 absolute text-white z-20 tracking-tighter"
        >
          le jeu post-AVC
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 relative w-auto">
        <p
          style={{
            fontFamily: "Quicksand Variable",
            fontSize: "1.3rem",
            marginTop: "2.5rem",
          }}
          className="font-bold text-center tracking-tighter"
        >
          jusqu&apos;à 70% des survivants d&apos;AVC peuvent souffrir de
          troubles cognitifs, y <br /> compris des problèmes de mémoire, dans
          les mois suivant l&apos;AVC.
        </p>
      </div>
      <div className="flex flex-col items-center relative w-auto">
        <button className="w-40 h-10 border-2 bg-black border-black rounded-md m-10">
          <p
            style={{ fontFamily: "Quicksand Variable" }}
            className="text-xs font-bold text-white"
          >
            Jouer 🚀
          </p>
        </button>
      </div>
    </>
  );
}
