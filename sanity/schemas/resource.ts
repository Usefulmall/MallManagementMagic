import { defineField, defineType } from "sanity";

export default defineType({
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Templates", value: "templates" },
          { title: "Checklists", value: "checklists" },
          { title: "Procedures", value: "procedures" },
          { title: "Financial", value: "financial" },
          { title: "Marketing", value: "marketing" },
          { title: "Legal", value: "legal" },
          { title: "Emergency", value: "emergency" },
        ],
      },
    }),
    defineField({
      name: "fileType",
      title: "File Type",
      type: "string",
      options: {
        list: [
          { title: "PDF", value: "PDF" },
          { title: "DOCX", value: "DOCX" },
          { title: "XLSX", value: "XLSX" },
        ],
      },
    }),
    defineField({
      name: "file",
      title: "File",
      type: "file",
    }),
  ],
});
