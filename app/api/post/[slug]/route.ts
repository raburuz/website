

/* NEXT */
import { NextResponse } from "next/server";

/* LIBRARIES */
import { z } from "zod";

/* APP */
import prisma from "@/lib/prisma";

/* FUNCTION */
export async function GET ( _req: Request, { params }: { params: { slug: string } } ){

  const slug = z.string().toLowerCase().parse(params.slug);
  let post = null;

  try {
    post = await prisma.post.findUnique({ where: { slug } })
  } catch (error) {
    console.log(error);
    return NextResponse.json( "Something was wrong", { status: 500  } );
  }

  try {

    if(!post) {
      post = await prisma.post.create({ data: { slug } })
    }

  } catch (error) {
    console.log(error);
    return NextResponse.json( "Something was wrong", { status: 500  } );
  }
  
  return NextResponse.json( post, { status: 200  } );

}