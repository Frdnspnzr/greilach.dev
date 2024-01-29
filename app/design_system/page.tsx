import BackToFrontPage from "@/components/BackToFrontPage";
import Code from "@/components/Code/Code";
import Example from "@/components/Example/Example";
import { FontSizeTable } from "@/components/FontSizeTable/FontSizeTable";
import Group from "@/components/Group/Group";
import Navigation from "@/components/Navigation/Navigation";
import SizeScale from "@/components/SizeScale/SizeScale";
import Title from "@/components/Title/Title";
import Link from "next/link";
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
      <nav>
        <BackToFrontPage />
      </nav>
      <main>
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
        <p>
          All sizes are according to the{" "}
          <Link href="https://utopia.fyi">Utopia Fluid Response Design</Link>{" "}
          and scale with the viewport width. The <em>minimal viewport width</em>{" "}
          is <em>500px</em>, the <em>maximum viewport width</em> is{" "}
          <em>1200px</em> for all scales.
        </p>
        <h3>Sizes</h3>
        <h4>Small (s)</h4>
        <SizeScale
          start={{ size: 88, viewportWidth: 500 }}
          end={{ size: 110, viewportWidth: 1200 }}
          variable="--size-s"
        />
        <h4>Medium (m)</h4>
        <SizeScale
          start={{ size: 120, viewportWidth: 500 }}
          end={{ size: 150, viewportWidth: 1200 }}
          variable="--size-m"
        />
        <h3>Spaces</h3>
        <h4>Extra extra extra small (3xs)</h4>
        <SizeScale
          start={{ size: 3, viewportWidth: 500 }}
          end={{ size: 4, viewportWidth: 1200 }}
          variable="--space-3xs"
        />
        <h4>Extra extra small (2xs)</h4>
        <SizeScale
          start={{ size: 6, viewportWidth: 500 }}
          end={{ size: 8, viewportWidth: 1200 }}
          variable="--space-2xs"
        />
        <h4>Extra small (xs)</h4>
        <SizeScale
          start={{ size: 9, viewportWidth: 500 }}
          end={{ size: 12, viewportWidth: 1200 }}
          variable="--space-xs"
        />
        <h4>Small (s)</h4>
        <SizeScale
          start={{ size: 12, viewportWidth: 500 }}
          end={{ size: 16, viewportWidth: 1200 }}
          variable="--space-s"
        />
        <h4>Medium (m)</h4>
        <SizeScale
          start={{ size: 18, viewportWidth: 500 }}
          end={{ size: 24, viewportWidth: 1200 }}
          variable="--space-m"
        />
        <h4>Large (l)</h4>
        <SizeScale
          start={{ size: 24, viewportWidth: 500 }}
          end={{ size: 32, viewportWidth: 1200 }}
          variable="--space-l"
        />
        <h4>Extra large (xl)</h4>
        <SizeScale
          start={{ size: 36, viewportWidth: 500 }}
          end={{ size: 48, viewportWidth: 1200 }}
          variable="--space-xl"
        />
        <h4>Extra extra large (2xl)</h4>
        <SizeScale
          start={{ size: 48, viewportWidth: 500 }}
          end={{ size: 64, viewportWidth: 1200 }}
          variable="--space-2xl"
        />
        <h4>Extra extra extra large (3xl)</h4>
        <SizeScale
          start={{ size: 72, viewportWidth: 500 }}
          end={{ size: 96, viewportWidth: 1200 }}
          variable="--space-3xl"
        />
        <h2>Colors</h2>
        <h3>Color Tokens</h3>
        <Group>
          <FullPalette name="Purple" />
          <FullPalette name="Blue" />
          <FullPalette name="Yellow" />
          <FullPalette name="Red" />
          <ColorDefinition color="var(--white)">White</ColorDefinition>
          <ColorDefinition color="var(--black)">Black</ColorDefinition>
          <FullPalette name="Gray" />
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
          <thead>
            <tr>
              <th>Name</th>
              <th>Font</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
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
        <h3>Font sizes</h3>
        <p>
          The fonts, like all other sizes, follow the{" "}
          <Link href="https://utopia.fyi">Utopia Fluid Response Design</Link>{" "}
          system. A total of eight different font sizes are utilized.
        </p>
        <FontSizeTable />
        <p>The font sizes are used for the following elements:</p>
        <table>
          <thead>
            <tr>
              <th>Element</th>
              <th>Size step</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Body text</td>
              <td>0</td>
              <td>Example</td>
            </tr>
            <tr>
              <td>Lead text</td>
              <td>1</td>
              <td className="lead">Example</td>
            </tr>
            <tr>
              <td>Heading Level 1</td>
              <td>5</td>
              <td>
                <h1 style={{ margin: 0, padding: 0 }}>Example</h1>
              </td>
            </tr>
            <tr>
              <td>Heading Level 2</td>
              <td>4</td>
              <td>
                <h2 style={{ margin: 0, padding: 0 }}>Example</h2>
              </td>
            </tr>
            <tr>
              <td>Heading Level 3</td>
              <td>3</td>
              <td>
                <h3 style={{ margin: 0, padding: 0 }}>Example</h3>
              </td>
            </tr>
            <tr>
              <td>Heading Level 4</td>
              <td>2</td>
              <td>
                <h4 style={{ margin: 0, padding: 0 }}>Example</h4>
              </td>
            </tr>
            <tr>
              <td>Metadata</td>
              <td>-1</td>
              <td className="metadata">Example</td>
            </tr>
            <tr>
              <td>Metadata Heading</td>
              <td>0</td>
              <td className="metadata">
                <h2 style={{ margin: 0, padding: 0 }}>Example</h2>
              </td>
            </tr>
            <tr>
              <td>Table body</td>
              <td>0</td>
              <td>Example</td>
            </tr>
            <tr>
              <td>Table head</td>
              <td>1</td>
              <td
                style={{
                  fontFamily: "var(--font-headings)",
                  color: "var(--color-primary)",
                  fontSize: "var(--font-step-1)",
                  fontWeight: 700,
                }}
              >
                Example
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Layout</h2>
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
          <thead>
            <tr>
              <th>Arrow</th>
              <th>Meaning</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
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

function FullPalette({ name }: Readonly<{ name: string }>) {
  const palette = [];
  for (let i = 100; i <= 900; i += 100) {
    palette.push(
      <ColorDefinition color={`var(--${name.toLowerCase()}-${i})`}>
        {name} {i}
      </ColorDefinition>
    );
  }
  return (
    <>
      <ColorDefinition color={`var(--${name.toLowerCase()}-50)`}>
        {name} 50
      </ColorDefinition>
      {palette}
    </>
  );
}
