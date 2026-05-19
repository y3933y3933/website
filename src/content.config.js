import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';


const blog = defineCollection({
    loader: glob({base :'./src/blog', pattern:'**/*.{md,mdx}'}),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        cover: image().optional(),
    })
})


export const collections = {blog}