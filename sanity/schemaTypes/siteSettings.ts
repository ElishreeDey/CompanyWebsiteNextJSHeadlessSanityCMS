/*
 ****************************************************************************************************************************
 * Filename    : siteSettings
 * Description : Sanity schema for the singleton 'Site Settings' document — holds company name,
 *               homepage banner (title + subtitle), logo, and footer text.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-07
 ****************************************************************************************************************************
 */

import { defineField, defineType } from 'sanity'

// Defines a new document schema 
export const siteSettings = defineType({

  name: 'siteSettings',  // Schema name used in queries. 
  title: 'Site Settings', // Display name shown in the Sanity Studio sidebar.
  type: 'document', // Indicates this schema represents a document i.e similar to a db table.

  // List of fields available.
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Banner Title',
      type: 'string',
      description: 'Main heading shown on the homepage banner (separate from Company Name, which is used in the header/footer)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Shown under the banner title on the homepage',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'text',
      rows: 3, // Shown on the About page.
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2, // Display approximately two visible lines in the editor.
    }),
  ],
})
