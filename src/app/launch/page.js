import React from "react";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Launcher from "@/src/components/Launcher";

export default async function Launch() {
  return (
    <div>
      <ResponsiveAppBar />
      <Launcher />
    </div>
  );
}
