import React from "react";
import LaunchForm from "@/src/app/launch/LaunchForm";
import { getLatestDiapo } from "@/src/query/diapo.query";
import { getAllNames } from "@/src/query/name.query";

export default async function Launch() {
  const diapos = await getLatestDiapo(); // On récupère les diapos
  const names = await getAllNames(); // On récupère les noms

  return (
    <div>
      <LaunchForm diapos={diapos} names={names} />
    </div>
  );
}
