import React from 'react';
import Link from 'next/link';
import styles from './styles/Blog.module.css';
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
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.blogCard}>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogReadTime}>{post.readTime}</span>
                </div>
                <h3 className={styles.blogTitle}>
                  <Link href={post.url}>{post.title}</Link>
                </h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <div className={styles.blogTags}>
                  {post.tags.map((tag, index) => (
                    <span key={index} className={styles.blogTag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className={styles.blogAction}>
                <Link href={post.url} className={styles.readMore}>
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

