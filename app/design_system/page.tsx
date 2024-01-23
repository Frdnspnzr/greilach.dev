import BackToFrontPage from "@/components/BackToFrontPage";
import Code from "@/components/Code/Code";
import Example from "@/components/Example/Example";
import Group from "@/components/Group/Group";
import Navigation from "@/components/Navigation/Navigation";
import Title from "@/components/Title/Title";
import ColorDefinition from "../../components/ColorDefinition/ColorDefinition";

export const metadata = {
  title: {
    default: "greilach.dev/design_system",
  },
};

export default async function Page() {
  return (
    <>
      <nav>
        <BackToFrontPage />
      </nav>
      <main>
        <Title>design_system</Title>
        <p className="lead">
          These are the governing design principles of this page and all my
          other projects that don&apos;t have something similiar on their own.
        </p>
        <p>
          It&apos;s not meant to be a complete design system that would allow
          another person to just swing in and keep doing what I&apos;m doing.
          While it aspires to be that its main purpose is to remind me of a few
          things and give me a playground to try out a few things.
        </p>
        <p>That&apos;s why it may be incomplete and use unusual terminology.</p>
        <h2>Sizes & Spacing</h2>
        <h2>Colors</h2>
        <h3>Color Tokens</h3>
        <Group>
          <ColorDefinition color="var(--purple-30)">Purple 30</ColorDefinition>
          <ColorDefinition color="var(--purple-40)">Purple 40</ColorDefinition>
          <ColorDefinition color="var(--purple-50)">Purple 50</ColorDefinition>
          <ColorDefinition color="var(--purple-60)">Purple 60</ColorDefinition>
          <ColorDefinition color="var(--purple-70)">Purple 70</ColorDefinition>
          <ColorDefinition color="var(--blue-30)">Blue 30</ColorDefinition>
          <ColorDefinition color="var(--blue-50)">Blue 50</ColorDefinition>
          <ColorDefinition color="var(--white)">White</ColorDefinition>
          <ColorDefinition color="var(--black)">Black</ColorDefinition>
          <ColorDefinition color="var(--gray-10)">Gray 10</ColorDefinition>
          <ColorDefinition color="var(--gray-50)">Gray 50</ColorDefinition>
          <ColorDefinition color="var(--gray-70)">Gray 70</ColorDefinition>
          <ColorDefinition color="var(--gray-100)">Gray 100</ColorDefinition>
        </Group>
        <h3>Semantic Colors</h3>
        <Group>
          <ColorDefinition color="var(--color-primary)">
            Primary
          </ColorDefinition>
          <ColorDefinition color="var(--color-primary-light)">
            Primary (Light)
          </ColorDefinition>
          <ColorDefinition color="var(--color-primary-dark)">
            Primary (Dark)
          </ColorDefinition>
          <ColorDefinition color="var(--color-secondary)">
            Secondary
          </ColorDefinition>
          <ColorDefinition color="var(--color-subtle)">Subtle</ColorDefinition>
          <ColorDefinition color="var(--color-faint)">Faint</ColorDefinition>
        </Group>
        <h2>Typography</h2>
        <h3>Fonts</h3>
        <table>
          <tr>
            <th>Name</th>
            <th>Font</th>
          </tr>
          <tr>
            <td>Body</td>
            <td>Lora</td>
          </tr>
          <tr>
            <td>Headings</td>
            <td>Josefin Slab</td>
          </tr>
          <tr>
            <td>Source Code</td>
            <td>Source Code Pro</td>
          </tr>
          <tr>
            <td>Metadata</td>
            <td>Yanone Kaffeesatz</td>
          </tr>
        </table>
        <Example>
          <h3>Heading</h3>
          <p>Body text</p>
          <code>Source Code</code>
          <p
            style={{
              fontFamily: "var(--font-metadata)",
              marginBlockStart: "var(--space-s)",
            }}
          >
            Metadata
          </p>
        </Example>
        <h2>Elements</h2>
        <h3>Sub-page titles</h3>
        <p>
          All the titles of sub-pages, like this design system page or the blog,
          follow the same pattern. The title always starts with greilach.dev/
          followed by the name of the sub-page. The title always matches the URL
          of that page.
        </p>
        <p>
          This principle does not reach further down. For example, a blog post
          may only have its own name as the title.
        </p>
        <p>There is a component for creating sub-page titles:</p>
        <Code language="xml">{`<Title>sub_page</Title>`}</Code>
        <Example>
          <Title>sub_page</Title>
        </Example>
        <h3>Navigation buttons</h3>
        <p>
          When not at the front page there&apos;s navigation buttons visible on
          top of the page. There&apos;s always at least one button that leads
          back to the front page and there may be one or more buttons that lead
          back to various sub pages.
        </p>
        <p>
          The navigation buttons use different types of arrows to mark how far
          back it will take the user.
        </p>
        <table>
          <tr>
            <th>Arrow</th>
            <th>Meaning</th>
            <th>Example</th>
          </tr>
          <tr>
            <td>&#8656;</td>
            <td>Front page</td>
            <td>&#8656; Back to the front page</td>
          </tr>
          <tr>
            <td>&#8592;</td>
            <td>Landing page of the current sub-page</td>
            <td>&#8592; Back to all posts</td>
          </tr>
          <tr>
            <td>&#8701;</td>
            <td>
              One layer back (but not to a landing page or the front page)
            </td>
            <td>&#8701; Back to Project Meeple Party</td>
          </tr>
        </table>
        <p>
          There is a component for creating navigation texts. Notice that the
          component does not generate a link.
        </p>
        <Code language="xml">{`<Navigation depth="landingpage">Back to all posts</Navigation>`}</Code>
        <Example>
          <Navigation depth="landingpage">Back to all posts</Navigation>
        </Example>
      </main>
    </>
  );
}
