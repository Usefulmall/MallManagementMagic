import { defineField, defineType } from "sanity";

export default defineType({
  name: "knowledgeItem",
  title: "Knowledge Hub Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "resourceType",
      title: "Resource Type",
      type: "string",
      options: {
        list: [
          { title: "Book", value: "book" },
          { title: "Association", value: "association" },
          { title: "Journal", value: "journal" },
          { title: "Website", value: "website" },
        ],
      },
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url",
    }),
  ],
});
