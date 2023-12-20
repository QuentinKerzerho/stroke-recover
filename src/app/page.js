"use client";

import ResponsiveAppBar from "../components/ResponsiveAppBar";
import BasicButtons from "../components/BasicButtons";
import TextIntro from "../components/TextIntro";

export default function Home() {
  return (
    <div>
      <ResponsiveAppBar />
      <TextIntro />
      <BasicButtons />
    </div>
  );
}
