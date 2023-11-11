/* NEXT */
import { MetadataRoute } from "next";
import { headers } from "next/headers";

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
  ];
}