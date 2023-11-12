/* NEXT */
import Link from "next/link";

/* APP */
import { seo} from "@/lib/seo";
import { month } from "@/constrains/date";
import { allBlogPosts } from "contentlayer/generated";
import prisma from "@/lib/prisma";

export const metadata = seo();

const getPostDataList = async () => {
  "use server"
  return await prisma.post.findMany({ select: { slug: true, likes: true, views: true } })
}

export const dynamic = 'force-dynamic';

export default async function Page(){
  
  const sortedPostsByDates  = allBlogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  const postDataDB = await getPostDataList();

  return (
    <main className='px-2 max-w-2xl mx-auto'>
      <div className="my-32">
        <h1 className="text-3xl font-medium text-blue-100/80 sm:text-4xl">Blog</h1>
        <p className="mt-4 align-middle text-lg leading-6 text-blue-100/50">
          Discover the most recent articles, news updates, and intriguing content related to my journey.
        </p>
        <div className="mt-24 flex flex-col gap-10">
          { 
            sortedPostsByDates.map( post => {

              const data = postDataDB.find((data)=> post.metadata.slugAsPath === data.slug ) ?? { likes: 0, views: 0 };

              return (
                <Link 
                  key={post._id}
                  href={post.metadata.slug}
                  className="block p-6 bg-zinc-800/80 rounded-2xl transition duration-300 line-clamp-2 group hover:bg-zinc-800"
                >
                  <h2 className="font-medium text-blue-100/80 text-xl">{post.title}</h2>
                  <div className="flex flex-row space-x-3 text-base text-blue-100/50">
                    <span>{ new Date(post.publishedAt).getDate() } { month[new Date(post.publishedAt).getMonth()] } {new Date(post.publishedAt).getFullYear()}</span>
                    <span className="text-blue-100/30">·</span>
                    <span>{data.views} views</span>
                    <span className="text-blue-100/30">·</span>
                    <span>{data.likes} likes</span>
                  </div>
                  <p className="mt-4 text-lg text-blue-100/70 line-clamp-3">{post.description}</p>
                </Link>

              )}
            ) 
          }
        </div>
      </div>
    </main>
  )
}