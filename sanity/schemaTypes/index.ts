/*
 ****************************************************************************************************************************
 * Filename    : index 
 * Description : Sanity all schemas defined in this folder and is imported by sanity.config.ts to build the Studio schema.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-07
 ****************************************************************************************************************************
 */
import { type SchemaTypeDefinition } from 'sanity'
import { siteSettings } from './siteSettings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
}
