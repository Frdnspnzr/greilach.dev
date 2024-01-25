import BackToFrontPage from "@/components/BackToFrontPage";
import Code from "@/components/Code/Code";
import ColorDefinition from "@/components/ColorDefinition/ColorDefinition";
import Example from "@/components/Example/Example";
import Group from "@/components/Group/Group";
import Navigation from "@/components/Navigation/Navigation";
import Tag from "@/components/Tag/Tag";
import { getAllPosts, getPost } from "@/lib/fetchers";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

type Props = { params: { slug: string } };

const components = {
  ColorDefinition,
  Group,
  Code,
  Example,
  Tag,
};

export default async function Page({ params }: Props) {
  const post = getPost(params.slug);
  return (
    <>
      <h1>{post.title}</h1>
      <nav>
        <BackToFrontPage />
        <Link href="/blog">
          <Navigation depth="landingpage">Back to all posts</Navigation>
        </Link>
      </nav>
      <div className="with-sidebar">
        <div className="sidebar">
          <div>
            <h2>Date</h2>
            {post.date.toLocaleDateString()}
          </div>
          <div>
            <h2>Author</h2>
            <p>Pascal Greilach</p>
          </div>
        </div>
        <div className="text-container">
          <MDXRemote source={post.content} components={components} />
        </div>
      </div>
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
