import BackToFrontPage from "@/components/BackToFrontPage";
import { getPost } from "@/lib/fetchers";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return (
    <>
      <nav>
        <BackToFrontPage />
        <Link href="/blog">&#8592; Back to all posts</Link>
      </nav>
      <h1>{post.title}</h1>
      <main>
        <MDXRemote source={post.content} />
      </main>
    </>
  );
}
