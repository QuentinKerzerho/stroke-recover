"use client";

import React from "react";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Launcher from "@/src/components/Launcher";
import { useSearchParams } from "next/navigation"; // Importez useRouter

export default function LaunchForm({ diapos, names }) {
  const searchParams = useSearchParams(); // on récupere l'id dans la barre de recherche
  const id = searchParams.get("id");
  return (
    <div>
      <ResponsiveAppBar />
      <Launcher id={id} diapos={diapos} names={names} />
    </div>
  );
}
