/*
 ****************************************************************************************************************************
 * Filename    : constants
 * Description : field limits for the contact form, enforced client-side, in the Server Action, and in the Sanity schema.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

export const CONTACT_FIELD_LIMITS = {
  name: 100,
  email: 254,
  message: 2000,
} as const;
