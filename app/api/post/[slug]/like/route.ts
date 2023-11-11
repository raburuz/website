

/* NODE */
import { createHash } from "node:crypto";

/* NEXT */
import { headers } from "next/headers";
import { NextResponse } from "next/server";

/* LIBRARIES */
import { z } from "zod";

/* APP */
import prisma from "@/lib/prisma";

/* FUNCTION */
export async function POST ( _req: Request, { params }: { params: { slug: string } } ){

  const localhost = "0.0.0.0";
  const slug = z.string().toLowerCase().parse(params.slug);

  //Fallback for localhost or non Vercel deployments
  const ipAddress = headers().get("x-forwarded-for") || localhost;

  const currentUserIpAddress = createHash("md5").update(ipAddress, "utf8").digest("hex"); 
  const currentSessionId = slug + "_" + currentUserIpAddress;
  
  try {
    
    const maxLikesBySessionPost = 3;
    const session = await prisma.session.findUnique({
      where: { id: currentSessionId },
      select: { likes: true },
    });

    if(session && session.likes === maxLikesBySessionPost) {
      return NextResponse.json( "Too many likes", { status: 400  } );
    }

    await prisma.session.upsert({
      where: { id: currentSessionId },
      create: { id: currentSessionId, likes: 1 },
      update: { likes: { increment: 1 } },
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json( "Something was wrong", { status: 500  } );
  }

  //Update Post Likes Count
  try {

    await prisma.post.upsert({
      where: { slug },
      create: { slug, likes: 1 },
      update: { likes: { increment: 1 } }
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json( "Something was wrong", { status: 500  } );
  }
  
  return NextResponse.json( "Done", { status: 200  } );
}