/*
 ****************************************************************************************************************************
 * Filename    : teamMember
 * Description : Sanity schema for 'Team Member' — name, photo, designation, and bio.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-07
 ****************************************************************************************************************************
 */

import { defineField, defineType } from 'sanity'

// Defines a new document schema
export const teamMember = defineType({

  name: 'teamMember', // Schema name used in queries.
  title: 'Team Member', // Display name shown in the Sanity Studio sidebar.
  type: 'document', // Indicates this schema represents a document i.e similar to a db table.

  // List of fields available.
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true }, // make hotsport true for image type field.
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'designation',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3, // Display approximately three lines in the editor.
      validation: (Rule) => Rule.required(),
    }),
  ],
})
