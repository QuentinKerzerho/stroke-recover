"use client";

import React from "react";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";
import Launcher from "@/src/components/Launcher";
import { useSearchParams } from "next/navigation"; // Importez useRouter

export default function LaunchForm({ photos, diapos, names }) {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log("id", id);
  return (
    <div>
      <ResponsiveAppBar />
      <Launcher id={id} diapos={diapos} photos={photos} names={names} />
    </div>
  );
}
