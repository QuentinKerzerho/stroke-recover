-- CreateTable
CREATE TABLE "Name" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Name_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photo" (
    "id" TEXT NOT NULL,
    "url" TEXT,
    "diapo_id" TEXT,
    "name_id" TEXT,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Diapo" (
    "id" TEXT NOT NULL,
    "created_at" TEXT,

    CONSTRAINT "Diapo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_diapo_id_fkey" FOREIGN KEY ("diapo_id") REFERENCES "Diapo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_name_id_fkey" FOREIGN KEY ("name_id") REFERENCES "Name"("id") ON DELETE SET NULL ON UPDATE CASCADE;
