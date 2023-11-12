/* NEXT */
import { Metadata } from "next";
import { notFound } from "next/navigation";

/* APP */
import { seo} from "@/lib/seo";
import { cn } from "@/lib/utils";
import { apiClient } from "@/lib/fetch";
import { allBlogPosts } from "contentlayer/generated";
import { month } from "@/constrains/date";
import { MDX } from "@/component/MDX";
import { LikeButton } from "@/component/LikeButton";
import { BackToTopButton } from "@/component/BackToTopButton";

//Params interface
interface IProps {
  params: {
    slug: string | null
  }
}

/* DYNAMIC DATA */
export async function generateStaticParams() {
  return allBlogPosts.map( post => ({
    slug: post.metadata.slug,
  }));
}

export async function generateMetadata( { params }: IProps ): Promise<Metadata> {

  const post = allBlogPosts.find( post => post.metadata.slug === '/blog/' + params.slug);

  if (!post) return {};

  const { title, description } = post;

  return seo({
    title: title,
    description: description,
    authors:{
      name: "Jean Ramirez",
    },
    robots: {
      index: true,
      follow: true,
    }
  })
}

const getViewsPost = async ( slug: string ): Promise<{ views: number }> => {
  "use server"
  const response = await apiClient(`/post/${slug}/view`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: 300 // 5 min
    }
  })

  return await response.json();

}

const sendViewPost = async ( slug: string ) => {
  "use server"
  await apiClient(`/post/${slug}/view`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    cache: "no-cache"
  })
}

export const dynamic = 'force-dynamic'

export default async function Page( { params }: IProps ){

  const post = allBlogPosts.find( post => post.metadata.slug === '/blog/' + params.slug);
  
  if(!post) notFound();

  const [ , postData ] = await Promise.all([
    sendViewPost(post.metadata.slugAsPath),
    getViewsPost(post.metadata.slugAsPath),
  ])

  return (
    <main className="relative z-10 grid grid-cols-[1fr,min(672px,100%),1fr] gap-y-8 px-2 pt-32 font-sans text-base text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,240px),min(672px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
      <article className="xl:col-end-4">
        <div className="mb-12">
          <h1 className="text-2xl font-medium text-blue-100/90 sm:text-3xl lg:text-4xl">{post.title}</h1>
          <div className="mt-2 flex flex-row space-x-3 text-base text-blue-100/50">
            <span>{ new Date(post.publishedAt).getDate() } { month[new Date(post.publishedAt).getMonth()] } {new Date(post.publishedAt).getFullYear()}</span>
            <span className="text-blue-100/30">·</span>
            <span>{postData.views ?? 0} views</span>
          </div>
        </div>
        <MDX code={post.body.code}/>
      </article>
      {/* Table of content */}
      <div className="sticky top-6 h-0 hidden xl:!col-start-4 xl:block">
          <div className="w-full space-y-6">
            {post.headings ? (
              <div className="w-full space-y-2 text-sm">
                <div className="uppercase text-blue-100/30">On this page</div>

                {
                  post.headings.map( heading => 
                    <div key={heading.slug}>
                      <a
                        href={`#${heading.slug}`}
                        className={cn(
                          "block text-blue-100/50 underline-offset-2 transition-all hover:text-blue-100 hover:underline hover:decoration-blue-200/50",
                          {
                            "pl-0.5": heading.heading === 2,
                            "pl-2": heading.heading === 3,
                          },
                        )}
                      >
                        {heading.text}
                      </a>
                    </div>
                  )
                }
              </div>
            ) : null}
        </div>
        <div className="mt-6 pt-6 flex flex-row items-center justify-between gap-2 border-t border-blue-200/20">
          <LikeButton slug={post.metadata.slugAsPath}/>
          <BackToTopButton/>
        </div>
      </div>
    </main>
  )
}