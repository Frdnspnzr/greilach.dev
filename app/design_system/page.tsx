import Group from "@/components/Group/Group";
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
      <Title>design_system</Title>
      <p className="lead">
        These are the governing design principles of this page and all my other
        projects that don&apos;t have something similiar on their own.
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
        <ColorDefinition color="var(--color-primary)">Primary</ColorDefinition>
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
      {/* <h2>Breakpoints</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>screen width</th>
          <th>Description</th>
        </tr>
        <tr>
          <td>sm</td>
          <td>449px and below</td>
          <td>Mobile phones or very small computer screens.</td>
        </tr>
        <tr>
          <td>md</td>
          <td>450px - 999px</td>
          <td>Small computer screens or tablets.</td>
        </tr>
        <tr>
          <td>lg</td>
          <td>1000px - 1999px</td>
          <td>Ordinary computer screens.</td>
        </tr>
        <tr>
          <td>xl</td>
          <td>2000px and up</td>
          <td>Ultra-wide computer screens.</td>
        </tr>
      </table> */}
      <h2>Elements</h2>
      <h3>Sub-page titles</h3>
      <p>
        All the titles of sub-pages, like this design system page or the blog,
        follow the same pattern. The title always starts with greilach.dev/
        followed by the name of the sub-page. The title always matches the URL
        of that page.
      </p>
      <p>
        This principle does not reach further down. For example, a blog post may
        only have its own name as the title.
      </p>
      <p>There is a component for creating sub-page titles:</p>
      <code>&lt;Title&gt;page_title&lt;/Title&gt;</code>
    </>
  );
}
