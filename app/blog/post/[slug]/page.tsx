import BackToFrontPage from "@/components/BackToFrontPage";
import Navigation from "@/components/Navigation/Navigation";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { getAllPosts, getPost } from "@/lib/fetchers";
import { Metadata } from "next";
import Link from "next/link";

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
  const post = await getPost(params.slug);
  return (
    <>
      <nav>
        <BackToFrontPage />
        <Link href="/blog">
          <Navigation depth="landingpage">Back to all posts</Navigation>
        </Link>
      </nav>
      <h1>{post.title}</h1>
      <div className="with-sidebar">
        <div className="sidebar">
          <div className="metadata">
            <h2>Date</h2>
            {post.date.toLocaleDateString()}
          </div>
          <div className="metadata">
            <h2>Topics</h2>
            {post.tags.join(", ")}
          </div>
          <div className="metadata wide">
            <h2>About me</h2>
            <p>
              I&apos;m <strong className="fancy">Pascal Greilach</strong> and
              I&apos;m doing stuff with computers! My day job is{" "}
              <strong className="fancy">
                full-stack application development
              </strong>
              . In my free time I&apos;m doing exactly the same but slightly
              less annoyed with the technologies I use. I like the web, nice
              things and all kinds of games (the full spectrum from lightweight
              collaborative roleplaying to multiplayer ego-shooter).
            </p>
          </div>
          <div className="metadata wide">
            <h2>Table of contents</h2>
            <TableOfContents headings={post.headings} />
          </div>
        </div>
        <div className="text-container">{post.content}</div>
      </div>
    </>
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
