import { getAllPosts } from "@/lib/fetchers";
import Link from "next/link";
import styles from "./blog.module.css";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <div className="container">
      <nav>
        <Link href="/" className={styles.back}>
          &#8610; Back to front page
        </Link>
      </nav>
      <h1>greilach.dev/blog</h1>
      <main>
        <h2>Latest posts</h2>
        {posts.map((s) => (
          <Link href={`/blog/post/${s.slug}`} key={s.slug}>
            <h3>{s.title}</h3>
          </Link>
        ))}
      </main>
    </div>
  );
}
