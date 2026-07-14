/*
 ***************************************************************************************************************************************************************************************
 * Filename    : actions
 * Description : Accepts form data,checks required fields,validates email format,checks whether the Sanity write token exists,creates a rec in Sanity,Returns success or error messages
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ***************************************************************************************************************************************************************************************
 */

"use server"; //ContactUs Form submission to server

import { writeClient } from "@/sanity/lib/writeClient";
import { CONTACT_MESSAGES } from "@/app/contact/messages";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return { status: "error", message: CONTACT_MESSAGES.validationError };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: CONTACT_MESSAGES.invalidEmailError };
  }
  if (!process.env.SANITY_API_WRITE_TOKEN) {
    return { status: "error", message: CONTACT_MESSAGES.notConfiguredError };
  }

  try {
    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      message,
    });
    return { status: "success", message: CONTACT_MESSAGES.successMessage };
  } catch (error) {
    console.error("[Contact]", error);
    return { status: "error", message: CONTACT_MESSAGES.submitError };
  }
}
