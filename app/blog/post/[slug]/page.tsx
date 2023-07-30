import { getPost } from "@/lib/fetchers";
import { MDXRemote } from "next-mdx-remote/rsc";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <main>
        <MDXRemote source={post.content} />
      </main>
    </div>
  );
}
