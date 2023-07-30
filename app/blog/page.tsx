import BackToFronPage from "@/components/BackToFrontPage";
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
        {posts.map((s) => (
          <Link href={`/blog/post/${s.slug}`} key={s.slug}>
            <h3>{s.title}</h3>
          </Link>
        ))}
      </main>
    </>
  );
}
