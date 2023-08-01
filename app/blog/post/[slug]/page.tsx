import BackToFrontPage from "@/components/BackToFrontPage";
import { getAllPosts, getPost } from "@/lib/fetchers";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
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

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost(params.slug);
  return {
    title: post.title,
  };
}
