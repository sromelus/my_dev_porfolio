import { MetadataRoute } from 'next';
import { getAllBlogPostsSorted } from './database/blogsQueryHelper';
import { BASE_URL } from './constant/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BASE_URL;

  // Add all your static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ] as const;

  // Add blog posts routes if you have them
  const blogPosts = getAllBlogPostsSorted(); // You would implement this to fetch your blog posts
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}