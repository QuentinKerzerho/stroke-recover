import React from "react";
import { getLatestPhoto } from "@/src/query/photo.query";
import { getLatestDiapo } from "@/src/query/diapo.query";
import { createDiapo } from "@/src/query/diapo.query";
import { deleteDiapo } from "@/src/query/diapo.query";
import { createPhoto } from "@/src/query/photo.query";
import GalleryForm from "@/src/app/gallery/GalleryForm";

export const dynamic = "force-dynamic";

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const photos = await getLatestPhoto(); // On récupère les photos
  const diapos = await getLatestDiapo(); // On récupère les diapos

  const newPhoto = async (photoUrl, nameData) => {
    // On crée une nouvelle photo
    "use server";
    return await createPhoto({ photoUrl, nameData });
  };
  const deleteDia = async (id) => {
    // On supprime une diapo
    "use server";
    return await deleteDiapo(id);
  };

  const newDiapo = async () => {
    // On crée une nouvelle diapo
    "use server";
    return await createDiapo();
  };

  return (
    <div>
      <GalleryForm
        diapos={diapos}
        newDiapo={newDiapo}
        deleteDia={deleteDia}
        newPhoto={newPhoto}
        photos={photos}
      />
    </div>
  );
}
