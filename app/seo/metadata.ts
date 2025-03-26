import { Metadata } from 'next';
import { getAllBlogPostsSorted } from '../database/blogsQueryHelper';
import { BASE_URL, DESCRIPTION, KEYWORDS, TWITTER_URL, GITHUB_URL, LINKEDIN_URL } from '../constant/constants';

// Helper to build full URLs for images based on environment
export const getFullImageUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};

export const siteConfig = {
  name: 'Shardly Romelus',
  title: 'Shardly Romelus | Portfolio',
  description: DESCRIPTION,
  url: BASE_URL,
  ogImage: '/shardly_porfolio_home_page.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  links: {
    twitter: TWITTER_URL,
    github: GITHUB_URL,
    linkedin: LINKEDIN_URL
  }
} as const;

// Get all blog posts from the database
const blogPosts = getAllBlogPostsSorted();

// Define the blog metadata type
interface BlogMetadataItem {
  title: string;
  description: string;
  keywords: string[];
}

// Dynamically generate blog metadata from blog posts data
export const blogMetadata = blogPosts.reduce((metadata: Record<string, BlogMetadataItem>, post) => {
  metadata[post.slug] = {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  };
  return metadata;
}, {});

export const baseMetadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://shardlyromelus.com'
  ),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: KEYWORDS,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{
      url: siteConfig.ogImage,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt: siteConfig.title,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    site: '@shardlyromelus',
    creator: '@shardlyromelus',
    images: [{
      url: siteConfig.ogImage,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt: siteConfig.title,
    }],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

// Now generate the blog post metadata for each blog using both
// the base metadata and the blog-specific metadata
const blogPostMetadata = blogPosts.reduce((obj: Record<string, Metadata>, post) => {
  obj[post.slug] = {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `${BASE_URL}${post.url}`,
      images: [{
        url: siteConfig.ogImage, // Use default OG image
        width: siteConfig.ogImageWidth,
        height: siteConfig.ogImageHeight,
        alt: post.title,
      }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      card: 'summary_large_image',
      images: [siteConfig.ogImage],
    }
  }
  return obj
}, {});

export const getPageMetadata = (page: 'home' | keyof typeof blogMetadata): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    home: {
      title: siteConfig.title,
      description: siteConfig.description,
      openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
      },
      twitter: {
        title: siteConfig.title,
        description: siteConfig.description,
      },
    },
    ...blogPostMetadata
  };

  return {
    ...baseMetadata,
    ...pageMetadata[page],
  };
};