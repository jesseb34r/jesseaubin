import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    "created-date": z.date(),
  }),
});

export const collections = {
  notes: notesCollection,
};
