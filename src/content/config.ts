import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).min(1).max(5),
    status: z.enum(["in-progress", "completed"]).default("in-progress"),
    repo: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  projects: projectsCollection,
};
