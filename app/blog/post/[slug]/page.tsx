import { getPost } from "@/lib/fetchers";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return (
    <main>
      <h1>{post.title}</h1>
      <MDXRemote source={post.content} />
    </main>
  );
}
