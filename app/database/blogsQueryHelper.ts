import blogData from './blogsData.json';

interface BlogPost {
  id: number;
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  keywords: string[];
  content: string;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPostsSorted(): BlogPost[] {
  return [...blogData.blogPosts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });
}

/**
 * Get a single blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogData.blogPosts.find(post => post.slug === slug);
}

/**
 * Get blog posts filtered by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = blogData.blogPosts.filter(post => 
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );

  return posts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}