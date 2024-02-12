// pages/test.js

import React from "react";
import prisma from "@/lib/prisma";
import ResponsiveAppBar from "@/src/components/ResponsiveAppBar";

export default async function Test() {
  const feed = await prisma.Name.findMany();

  return (
    <div>
      <main>
        <ResponsiveAppBar />
        <p>Je veux la donnée de name là</p>
        {/* Utilisez les données de feed ici */}
        {feed.map((item) => (
          <div key={item.name}>
            <p>Name: {item.name}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
