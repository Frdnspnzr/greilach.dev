import BackToFronPage from "@/components/BackToFrontPage";
import Tag from "@/components/Tag/Tag";
import { getAllPosts } from "@/lib/fetchers";
import Link from "next/link";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <>
      <nav>
        <BackToFronPage />
      </nav>
      <h1>greilach.dev/blog</h1>
      <main>
        <h2>Latest posts</h2>
        {posts
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((s) => (
            <>
              <Link href={`/blog/post/${s.slug}`} key={s.slug}>
                <h3>
                  <strong>{s.date.toLocaleDateString()}</strong> {s.title}
                </h3>
              </Link>
              <p>
                {s.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </p>
              <p>
                {s.excerpt}{" "}
                <Link href={`/blog/post/${s.slug}`}>
                  Continue reading &#8594;
                </Link>
              </p>
            </>
          ))}
      </main>
    </>
  );
}
