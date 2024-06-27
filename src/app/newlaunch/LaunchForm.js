"use client";

import React from "react";
import LauncherNew from "@/src/components/LauncherNew";
import { useSearchParams } from "next/navigation"; // Importez useRouter

export default function LaunchForm({ diapos, names }) {
  const searchParams = useSearchParams(); // on récupere l'id dans la barre de recherche
  const id = searchParams.get("id");
  return (
    <div>
      <LauncherNew id={id} diapos={diapos} names={names} />
    </div>
  );
}
