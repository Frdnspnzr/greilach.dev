import BentoContainer from "@/components/Bento/BentoContainer/BentoContainer";
import BentoElement from "@/components/Bento/BentoElement/BentoElement";
import FrontPageLanes from "@/components/Effects/FrontPageLanes/FrontPageLanes";
import FrontPageLines from "@/components/Effects/FrontPageLines/FrontPageLines";
import FrontPageTyped from "@/components/Effects/FrontPageTyped/FrontPageTyped";
import Image from "next/image";
import Link from "next/link";
import face from "./face.jpg";

export default function Home() {
  return (
    <div className="container">
      <BentoContainer rows={4} columns={4}>
        <BentoElement row={1} column={1} bold color>
          Hi, I&apos;m Pascal.
        </BentoElement>
        <BentoElement row={1} column={2} image>
          <Image src={face} alt={"My face"} />
        </BentoElement>
        <BentoElement row={2} column={3} width={2} bold>
          <FrontPageTyped />
        </BentoElement>
        <BentoElement row={2} column={2} invisible>
          <FrontPageLanes />
        </BentoElement>
        <BentoElement row={2} column={1} width={1}>
          Currently, there is not much to see here as this page is still a work
          in progress. Some day, you will find everything about what I do as a
          developer here.
        </BentoElement>
        <BentoElement row={3} column={2} link bold center>
          <Link href="/blog">Blog →</Link>
        </BentoElement>
        <BentoElement row={3} column={1} width={1} invisible>
          <FrontPageLines />
        </BentoElement>
        <BentoElement row={4} column={4} link bold center>
          <Link href="https://links.greilach.dev">Links →</Link>
        </BentoElement>
        <BentoElement row={3} column={3} height={2} bold color>
          I will fight to play as yellow in any board game.
        </BentoElement>
      </BentoContainer>
    </div>
  );
}
