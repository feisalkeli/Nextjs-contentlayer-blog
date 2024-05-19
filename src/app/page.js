import { allDocuments } from "../../.contentlayer/generated/index.mjs";
import { FeautredPosts } from "../components/Home/FeautredPosts";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import { RecentPosts } from "../components/Home/RecentPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allDocuments} />
      <FeautredPosts blogs={allDocuments} />
      <RecentPosts blogs={allDocuments} />
    </main>
  );
}
