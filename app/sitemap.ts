/* NEXT */
import { MetadataRoute } from "next";
import { headers } from "next/headers";

/* APP */
import { allBlogPosts } from "contentlayer/generated";

/* SITEMAP */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  const host = headersList.get('host') as string;
  
  /* Production environment must be https:// */
  const domain = "https://" + host;

  return [
    {
      url: domain,
      lastModified: new Date(),
    },
    {
      url: domain + "/blog",
      lastModified: new Date(),
    },
    ...allBlogPosts.map((post) => ({
      url: domain + post.metadata.slug,
      lastModified: new Date(post.publishedAt),
    })),
  ];
}