import { Metadata } from 'next';

export const siteConfig = {
  name: 'Shardly Romelus',
  title: 'Shardly Romelus | Portfolio',
  description: 'Full-stack web developer specializing in modern web technologies. Showcasing my latest projects and skills, and blog posts.',
  url: 'https://your-domain.com', // Replace with your actual domain
  ogImage: '/shardly_porfolio_home_page.png',
  links: {
    twitter: 'https://twitter.com/your-twitter',
    github: 'https://github.com/your-github',
    linkedin: 'https://linkedin.com/in/your-linkedin'
  }
} as const;

// Blog post metadata configurations
export const blogMetadata = {
  'optimizing-rails-applications': {
    title: 'Optimizing Rails Applications | Performance Tips and Best Practices',
    description: 'Learn how to optimize your Ruby on Rails applications for better performance. Discover tips, techniques, and best practices for Rails optimization.',
    keywords: ['N+1', 'N+1 queries', 'N plus one', 'N plus one queries', 'N+1 queries', 'N+1 query', 'N+1 query optimization', 'N+1 query optimization', 'N+1 problem', 'N+1 problem solution', 'Rails optimization', 'Ruby on Rails performance', 'Rails best practices', 'Rails caching', 'Rails N+1 queries', 'Rails performance tips', 'optimize Rails app'],
  },
  'understanding-rails-view-rendering': {
    title: 'Understanding Rails View Rendering | A Comprehensive Guide',
    description: 'Deep dive into Ruby on Rails view rendering process. Learn about partials, layouts, helpers, and best practices for Rails views.',
    keywords: ['Rails views', 'Rails view rendering', 'Rails templates', 'Rails partials', 'Rails layouts', 'Rails view helpers', 'ERB templates', 'view rendering'],
  }
};

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ['web developer', 'software engineer', 'full-stack developer', 'React', 'Next.js', 'portfolio', 'shardly romelus', 'shardly romelus portfolio', 'shardly romelus linkedin', 'shardly romelus github', 'shardly'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shardly Romelus | Web Developer Portfolio',
    description: 'Personal portfolio of Shardly Romelus, showcasing web development projects, skills, and professional experience in software engineering.',
    images: [siteConfig.ogImage], // Same image as OpenGraph
    creator: '@sromelus', // Replace with your Twitter handle
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

export const getPageMetadata = (page: 'home' | keyof typeof blogMetadata): Metadata => {
  const pageMetadata: Record<string, Metadata> = {
    home: {
      title: 'Home',
      description: 'Welcome to my portfolio showcasing my latest projects and skills, and blog posts.',
      openGraph: {
        title: 'Home | Shardly Romelus Portfolio',
        description: 'Welcome to my portfolio showcasing my latest projects and skills, and blog posts.',
      },
      twitter: {
        title: 'Home | Shardly Romelus Portfolio',
        description: 'Welcome to my portfolio showcasing my latest projects and skills, and blog posts.',
      },
    },
    'optimizing-rails-applications': {
      title: blogMetadata['optimizing-rails-applications'].title,
      description: blogMetadata['optimizing-rails-applications'].description,
      keywords: blogMetadata['optimizing-rails-applications'].keywords,
      openGraph: {
        title: blogMetadata['optimizing-rails-applications'].title,
        description: blogMetadata['optimizing-rails-applications'].description,
        type: 'article',
      },
      twitter: {
        title: blogMetadata['optimizing-rails-applications'].title,
        description: blogMetadata['optimizing-rails-applications'].description,
        card: 'summary_large_image',
      },
    },
    'understanding-rails-view-rendering': {
      title: blogMetadata['understanding-rails-view-rendering'].title,
      description: blogMetadata['understanding-rails-view-rendering'].description,
      keywords: blogMetadata['understanding-rails-view-rendering'].keywords,
      openGraph: {
        title: blogMetadata['understanding-rails-view-rendering'].title,
        description: blogMetadata['understanding-rails-view-rendering'].description,
        type: 'article',
      },
      twitter: {
        title: blogMetadata['understanding-rails-view-rendering'].title,
        description: blogMetadata['understanding-rails-view-rendering'].description,
        card: 'summary_large_image',
      },
    },
  };

  return {
    ...baseMetadata,
    ...pageMetadata[page],
  };
};