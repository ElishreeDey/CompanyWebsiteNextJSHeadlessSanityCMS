/*
 ****************************************************************************************************************************
 * Filename    : service
 * Description : Sanity schema for 'Service' documents — with title, description, price, and image.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-07
 ****************************************************************************************************************************
 */

import { defineField, defineType } from "sanity";

// Defines a new document schema
export const service = defineType({
  name: "service", // Schema name used in queries.
  title: "Service", // Display name shown in the Sanity Studio sidebar.
  type: "document", // Indicates this schema represents a document i.e similar to a db table.

  // List of fields available.
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
      rows: 4, // Display approximately four visible lines in the editor.
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0), // Price cannot be negative.
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }, // make hotsport true for image type field.
      validation: (Rule) => Rule.required(),
    }),
  ],
});
