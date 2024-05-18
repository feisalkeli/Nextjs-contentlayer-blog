import { allDocs } from "../../.contentlayer/generated";
import { FeautredPosts } from "../components/Home/FeautredPosts";
import HomeCoverSection from "../components/Home/HomeCoverSection";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allDocs} />
      <FeautredPosts blogs={allDocs} />
    </main>
  );
}
