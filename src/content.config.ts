import { defineCollection, reference, z } from "astro:content";

import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    // isDraft: z.boolean(),
    relatedPosts: z.array(reference("posts")).optional(),
  }),
});

export const collections = { posts };
