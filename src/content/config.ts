import { defineCollection, z } from 'astro:content';

const project = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		date: z.string(),
		comment: z.string(),
		description: z.string(),
		cause: z.string(),
		heroUrl: image(),
	}),
});

export const collections = { project };