import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>greilach.dev</h1>
      <main>
        <h2>Hi, I&apos;m Pascal</h2>
        <p>
          Currently, there is not much to see here as this page is still a work
          in progress. Some day, you will find everything about what I do as a
          developer here. This front page will look so good it will blow your
          mind! Until then, these parts are currently working more or less as
          expected:
        </p>
        <ul>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/design_system">Design System</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
