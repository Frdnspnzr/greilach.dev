import BackToFrontPage from "@/components/BackToFrontPage";
import Tag from "@/components/Tag/Tag";
import Title from "@/components/Title/Title";
import { getAllPosts } from "@/lib/fetchers";
import Link from "next/link";

export default async function Page() {
  const posts = getAllPosts();

  return (
    <>
      <nav>
        <BackToFrontPage />
      </nav>
      <Title>blog</Title>
      <div className="text-container">
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
                    Continue&nbsp;reading&nbsp;&#8594;
                  </Link>
                </p>
              </>
            ))}
        </main>
      </div>
    </>
  );
}
