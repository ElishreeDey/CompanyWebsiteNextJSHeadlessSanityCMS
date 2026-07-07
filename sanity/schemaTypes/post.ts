/*
 ****************************************************************************************************************************
 * Filename    : post
 * Description : Sanity schema for 'Post' (blog) documents — title, slug, author, published date,
 *               body content, and cover image. 
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-07
 ****************************************************************************************************************************
 */

import { defineField, defineType } from 'sanity'

// Defines a new document schema
export const post = defineType({

  name: 'post', // Schema name used in queries.
  title: 'Post', // Display name shown in the Sanity Studio sidebar.
  type: 'document', // Indicates this schema represents a document i.e similar to a db table.

  // List of fields available.
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 }, // Auto-generates the slug from the title. e.g: Blog Title = Company News 2026 , Slug = company-news-2026
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt', // excerpt is a short summary of the full blog post.
      type: 'text',
      rows: 2, 
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }, // make hotsport true for image type field.
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }], // Portable Text — rich text body of the post. Similar as content of string[] or block[]
      validation: (Rule) => Rule.required(),
    }),
  ],
})
