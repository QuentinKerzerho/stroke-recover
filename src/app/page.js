import React from "react";
import { getLatestDiapo } from "@/src/query/diapo.query";
import PageForm from "@/src/app/PageForm";

// Supports weights 300-700
import "@fontsource-variable/quicksand";

export default async function NewFront2() {
  const diapos = await getLatestDiapo();

  return (
    <>
      <PageForm diapos={diapos} />
    </>
  );
}
