import BentoContainer from "@/components/Bento/BentoContainer/BentoContainer";
import BentoElement from "@/components/Bento/BentoElement/BentoElement";
import { getAllPosts, getPost } from "@/lib/fetchers";
import { Metadata } from "next";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);
  return (
    <div className="container">
      <BentoContainer columns={4} rows={4}>
        <BentoElement row={1} column={1} link bold center>
          <nav>
            <Link href="/blog">&#8592; Back to all posts</Link>
          </nav>
        </BentoElement>
        <BentoElement row={1} column={2} width={3} invisible>
          <article>
            <h1>{post.title}</h1>
            {post.content}
          </article>
        </BentoElement>
        <BentoElement row={2} column={1}>
          <div className="metadata">
            <h2>Topics</h2>
            {post.tags.join(", ")}
          </div>
        </BentoElement>

        <BentoElement row={3} column={1} height={2} color>
          <div className="metadata">
            <h2>About me</h2>
            <p>
              I&apos;m <strong>Pascal Greilach</strong> and I&apos;m doing stuff
              with computers! My day job is{" "}
              <strong>full-stack application development</strong>. In my free
              time I&apos;m doing exactly the same but slightly less annoyed
              with the technologies I use. I like the web, nice things and all
              kinds of games.
            </p>
          </div>
        </BentoElement>
      </BentoContainer>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.title,
  };
}
