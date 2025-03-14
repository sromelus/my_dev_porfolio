import styles from '../blogs/styles/BlogPost.module.css';
import Link from 'next/link';

export default function NotFound() {
    return (
      <div className={styles.blogPostPage}>
        <div className={styles.container} style={{ textAlign: 'center' }}>
          <div className={styles.blogPost}>
            <h1 className={styles.blogTitle}>404</h1>
            <p>Not Found</p>
            <p>Please check the URL and try again.</p>
            <div className={styles.backLink}>
              <Link href="/">
                ← Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}