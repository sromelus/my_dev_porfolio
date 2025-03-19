import styles from '../styles/BlogPost.module.css';
import Link from 'next/link';
import { getBlogPostBySlug } from '../../database/blogsQueryHelper';
import { notFound } from 'next/navigation';
import { getPageMetadata, blogMetadata } from '@/app/seo/metadata';
import { Metadata } from 'next';

type BlogPost = {
  id: number;
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
};

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Verify that the blog slug is valid
  const slug = (await params).slug;
  
  if (slug in blogMetadata) {
    return getPageMetadata(slug as keyof typeof blogMetadata);
  }

  // Return default metadata if blog not found
  return getPageMetadata('home');
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  const post = getBlogPostBySlug(slug) as BlogPost;

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.blogPostPage}>
      <div className={styles.container}>
        <article className={styles.blogPost}>
          {/* Article Header */}
          <header className={styles.blogHeader}>
            <div className={styles.blogMeta}>
              <span className={styles.blogDate}>{post.date}</span>
              <span className={styles.blogReadTime}>{post.readTime}</span>
            </div>
            <h1 className={styles.blogTitle}>{post.title}</h1>
            <div className={styles.blogTags}>
              {post.tags.map((tag, index) => (
                <span key={index} className={styles.blogTag}>{tag}</span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div 
            className={styles.blogContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />


          {/* Back to Blogs Link */}
          <div className={styles.backLink}>
            <Link href="/blogs">
              ← Back to all blogs
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}