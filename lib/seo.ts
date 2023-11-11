/* NEXT */
import type { Metadata } from 'next';

interface IDefaultMetadataProps{
  title?: string, 
  description?: string,
}

const defaultMetadata= ( data?: IDefaultMetadataProps ): Metadata => {

  const domain = "https://arkift.com";

  const title = data?.title ?? "Jean Ramirez | Life enthusiast seeking to achieve freedom"; 
  const description = data?.description ?? "Welcome to my digital oasis 🏝️ where I invite you to explore my digital products, projects, experiments..."; 

  return {
    title,
    description,
    openGraph: {
      type: "website",
      url: domain,
      title,
      description,
      siteName: title,
    },
    twitter: {
      card: "summary_large_image",
      site: domain,
      creator: "arkift_r",
      title,
      description,
    },
    metadataBase: new URL(domain),
    alternates:{
      canonical: '/',
    },
    category: "indie hacker",
    keywords: "indie hacker, Solopreneur",
  }
}

/**
 * Generate SEO metadata for a web page.
 *
 * @param metadata - Metadata object containing SEO information.
 * @returns Merged metadata with default values.
 */
export const seo = ( metadata?: Metadata ): Metadata => {

  // If no metadata is provided, return default values
  if(!metadata) return defaultMetadata();

  const { title, description, ...props } = metadata;

  // Merge the provided metadata with default values
  return {
    ...defaultMetadata({
      title: title as string | undefined, 
      description: description as string | undefined,
    }),
    ...props,
  }

} 