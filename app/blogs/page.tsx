import React from 'react';
import Link from 'next/link';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  tags: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing Rails Applications: Solving the N+1 Query Problem",
    excerpt: "Learn how to identify and fix performance bottlenecks in Rails applications by addressing the common N+1 query issue...",
    date: "March 15, 2023",
    readTime: "8 min read",
    url: "/blog/optimizing-rails-applications",
    tags: ["Ruby on Rails", "Performance", "Database"]
  },
  {
    id: 2,
    title: "Building Real-time Applications with WebSockets",
    excerpt: "Explore the implementation of WebSockets for creating responsive, real-time features in modern web applications...",
    date: "January 20, 2023",
    readTime: "10 min read",
    url: "/blog/real-time-applications-websockets",
    tags: ["WebSockets", "JavaScript", "Real-time"]
  },
  // Add more blog posts as needed
];

export default function BlogPage() {
  return (
    <div className="blog-page">
      <div className="container">
        <h1 className="page-title">Blog</h1>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">
                  <Link href={post.url}>{post.title}</Link>
                </h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-tags">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-action">
                <Link href={post.url} className="read-more">
                  Read Post
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

