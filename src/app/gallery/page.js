import React from "react";
import { getLatestPhoto } from "@/src/query/photo.query";
import { getLatestDiapo } from "@/src/query/diapo.query";
import { createDiapo } from "@/src/query/diapo.query";
import { deleteDiapo } from "@/src/query/diapo.query";
import { createPhoto } from "@/src/query/photo.query";
import { deletePhoto } from "@/src/query/photo.query";
import { addPhotoToDiapo } from "@/src/query/photo.query";
import { removePhotoFromDiapo } from "@/src/query/photo.query";
import GalleryForm from "@/src/app/gallery/GalleryForm";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

// ----------------------------------------------------------------------------------------------------------
export default async function Gallery() {
  const photos = await getLatestPhoto(); // On récupère les photos
  const diapos = await getLatestDiapo(); // On récupère les diapos

  const newPhoto = async (photoUrl, nameData) => {
    // On crée une nouvelle photo
    "use server";
    await createPhoto({ photoUrl, nameData });
    revalidatePath("/gallery", "page");
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

  const deletePicture = async (id) => {
    // On supprime une photo
    "use server";
    await deletePhoto(id);
    revalidatePath("/gallery", "page");
  };

  const removePhotoFromDiapoFun = async (photoId) => {
    // On enlève une photo d'une diapo
    "use server";
    await removePhotoFromDiapo(photoId);
    revalidatePath("/gallery", "page");
  };

  const addPhotoToDiapoFun = async (photoId, diapoId) => {
    // On ajoute une photo à une diapo
    "use server";
    await addPhotoToDiapo(photoId, diapoId);
    revalidatePath("/gallery", "page");
  };

  return (
    <div>
      <GalleryForm
        diapos={diapos}
        newDiapo={newDiapo}
        deleteDia={deleteDia}
        newPhoto={newPhoto}
        photos={photos}
        deletePicture={deletePicture}
        addPhotoToDiapoFun={addPhotoToDiapoFun}
        removePhotoFromDiapoFun={removePhotoFromDiapoFun}
      />
    </div>
  );
}
