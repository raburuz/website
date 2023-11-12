/* NEXT */
import { Metadata } from "next";
import { notFound } from "next/navigation";

/* APP */
import { seo} from "@/lib/seo";
import { cn } from "@/lib/utils";
import { apiClient } from "@/lib/fetch";
import { allBlogPosts } from "contentlayer/generated";
import { MDX } from "@/component/MDX";
import { month } from "@/constrains/date";

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

const getPostData = async ( slug: string ): Promise<{ views: number, likes: number }> => {
  
  const response = await apiClient(`/post/${slug}`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
    cache: "no-cache"
  })

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const data = await response.json();

  return data
}

const sendViewPost = async ( slug: string ) => {

  const response = await apiClient(`/post/${slug}/view`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    cache: "no-cache"
  })

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

}

export const dynamic = 'force-dynamic'

export default async function Page( { params }: IProps ){

  const post = allBlogPosts.find( post => post.metadata.slug === '/blog/' + params.slug);
  
  if(!post) notFound();

  const [ , postData] = await Promise.all([
    sendViewPost(post.metadata.slugAsPath),
    getPostData(post.metadata.slugAsPath),
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
            <span className="text-blue-100/30">·</span>
            <span>{postData.likes ?? 0} likes</span>
          </div>
        </div>
        <MDX code={post.body.code}/>
      </article>
      {/* Table of content */}
      <div className="sticky top-6 h-0 hidden xl:!col-start-4 xl:block">
          <div className="w-full space-y-6">
            {post.headings ? (
              <div className="w-full space-y-2 text-sm">
                <div className="uppercase text-rose-100/30">On this page</div>

                {
                  post.headings.map( heading => 
                    <div key={heading.slug}>
                      <a
                        href={`#${heading.slug}`}
                        className={cn(
                          "block text-rose-100/50 underline-offset-2 transition-all hover:text-rose-100 hover:underline hover:decoration-rose-200/50",
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
      </div>
    </main>
  )
}