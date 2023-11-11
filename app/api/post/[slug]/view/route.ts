

/* NEXT */
import { NextResponse } from "next/server";

/* LIBRARIES */
import { z } from "zod";

/* APP */
import prisma from "@/lib/prisma";

/* FUNCTION */
export async function POST ( _req: Request, { params }: { params: { slug: string } } ){
  
  const slug = z.string().toLowerCase().parse(params.slug);

  try {
    await prisma.post.upsert({
      where: { slug },
      create: { slug, views: 1 },
      update: { views: { increment: 1 } }
    })
  } catch (error) {
    console.log(error);
    return NextResponse.json( "Something was wrong", { status: 500  } );
  }
  
  return NextResponse.json( "Done", { status: 200  } );
    
}