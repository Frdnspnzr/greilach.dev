import Link from "next/link";
import Navigation from "./Navigation/Navigation";

export default function BackToFrontPage() {
  return (
    <Link href="/">
      <Navigation depth="frontpage">Back to front page</Navigation>
    </Link>
  );
}
