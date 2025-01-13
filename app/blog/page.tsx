import BentoContainer from "@/components/Bento/BentoContainer/BentoContainer";
import BentoElement from "@/components/Bento/BentoElement/BentoElement";
import Tag from "@/components/Tag/Tag";
import { getAllPosts } from "@/lib/fetchers";
import Link from "next/link";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <BentoContainer columns={4} rows={4}>
      <BentoElement row={1} column={1} link bold center>
        <nav>
          <a href="/">&#8592; Back to front page</a>
        </nav>
      </BentoElement>
      <BentoElement row={1} column={2} width={3} bold title>
        <h1>Blog</h1>
      </BentoElement>
      <BentoElement row={2} column={1} bold color>
        <h2>Latest posts</h2>
      </BentoElement>
      <BentoElement row={2} column={2} width={3} invisible>
        <main>
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
      </BentoElement>
    </BentoContainer>
  );
}
