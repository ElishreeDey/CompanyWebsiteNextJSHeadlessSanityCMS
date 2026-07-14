/*
 ****************************************************************************************************************************
 * Filename    : contactMessage
 * Description : Sanity schema for 'Contact Message'
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-08
 ****************************************************************************************************************************
 */

import { defineField, defineType } from "sanity";

// Defines a new document schema
export const contactMessage = defineType({
  name: "contactMessage", // Schema name used in queries.
  title: "Contact Message", // Display name shown in the Sanity Studio sidebar.
  type: "document", // Indicates this schema represents a document i.e similar to a db table.

  // List of fields available.
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email(), // valid email format sanity check.
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],

  //Here "preview" is specified so in Sanity Studio it can easily tell which message belongs to whom.
  //Here name = contact name , email = contact email
  preview: {
    select: { title: "name", subtitle: "email" },
  },
});
