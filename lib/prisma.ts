
/* LIBRARIES */
import { connect } from "@planetscale/database";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";

const prismaClient = () => {
  const connectionDB = `${process.env.DATABASE_URL}`;
  const connection = connect({ url: connectionDB });
  const adapter = new PrismaPlanetScale(connection);
  return new PrismaClient({ adapter });
}

let prisma: PrismaClient

// https://github.com/prisma/prisma-client-js/issues/228#issuecomment-618433162
// https://github.com/vercel/next.js/issues/7811#issuecomment-618425485
// https://github.com/prisma/prisma-client-js/issues/730

if (process.env.NODE_ENV === "production") {
  prisma = prismaClient();
} else {
  // Ensure the prisma instance is re-used during hot-reloading
  // Otherwise, a new client will be created on every reload
  // @ts-ignore
  global["prisma"] = global["prisma"] || prismaClient();
  // @ts-ignore
  prisma = global["prisma"]
}

export default prisma
