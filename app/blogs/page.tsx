import React from 'react';
import Link from 'next/link';
import styles from './styles/Blog.module.css';
import { getAllBlogPostsSorted } from '../database/blogsQueryHelper';

export default function BlogsPage() {
  const blogPosts = getAllBlogPostsSorted();

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

