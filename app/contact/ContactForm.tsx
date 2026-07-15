/*
 ****************************************************************************************************************************
 * Filename    : ContactForm
 * Description : ContactUs form - submits via the submitContactMessage Server Action.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

"use client"; // Form entries must be Client Components

import { useActionState } from "react";
import {
  submitContactMessage,
  type ContactFormState,
} from "@/app/contact/actions";
import { CONTACT_MESSAGES } from "@/app/contact/messages";
import { CONTACT_FIELD_LIMITS } from "@/app/contact/constants";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClassName =
  "rounded border border-black/[.08] px-3 py-2 dark:border-white/[.145] dark:bg-transparent";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="flex max-w-md flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-medium">
          {CONTACT_MESSAGES.nameLabel}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={CONTACT_FIELD_LIMITS.name}
          className={inputClassName}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium">
          {CONTACT_MESSAGES.emailLabel}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={CONTACT_FIELD_LIMITS.email}
          className={inputClassName}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-medium">
          {CONTACT_MESSAGES.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={CONTACT_FIELD_LIMITS.message}
          className={inputClassName}
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-50 dark:hover:bg-[#ccc]"
      >
        {isPending
          ? CONTACT_MESSAGES.submittingLabel
          : CONTACT_MESSAGES.submitLabel}
      </button>

      {state.status !== "idle" && (
        <p
          role="status"
          className={
            state.status === "success"
              ? "text-sm text-green-600"
              : "text-sm text-red-600"
          }
        >
          {state.message}
        </p>
      )}
    </form>
  );
}
