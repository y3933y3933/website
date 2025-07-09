import { getCollection } from "astro:content";

export async function getAllPosts() {
  return (await getCollection("posts"))
    .filter((p) => !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
