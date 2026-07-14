/*
 ****************************************************************************************************************************
 * Filename    : page
 * Description : ContactUs page — form posts to a Server Action that creates a contactUsMessage in Sanity.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-14
 ****************************************************************************************************************************
 */

import type { Metadata } from "next";
import { CONTACT_MESSAGES } from "@/app/contact/messages";
import ContactForm from "@/app/contact/ContactForm";

export const metadata: Metadata = {
  title: CONTACT_MESSAGES.pageTitle,
  description: CONTACT_MESSAGES.pageDescription,
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-8 px-16 py-20">
      <h1 className="text-3xl font-semibold tracking-tight">
        {CONTACT_MESSAGES.pageTitle}
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        {CONTACT_MESSAGES.pageDescription}
      </p>
      <ContactForm />
    </main>
  );
}
