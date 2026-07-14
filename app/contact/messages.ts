/*
 ****************************************************************************************************************************
 * Filename    : messages
 * Description : Centralized message for the ContactUs.
 * Author      : Elishree Dey Chand
 * Created     : 2026-07-13
 ****************************************************************************************************************************
 */

export const CONTACT_MESSAGES = {
  pageTitle: "Contact Us",
  pageDescription: "Get in touch — we'd love to hear from you.",
  nameLabel: "Name",
  emailLabel: "Email",
  messageLabel: "Message",
  submitLabel: "Send Message",
  submittingLabel: "Sending...",
  successMessage: "Thanks! Your message has been sent.",
  validationError: "Please fill in all fields.",
  invalidEmailError: "Please enter a valid email address.",
  notConfiguredError:
    "The contact form isn't fully configured yet. Please try again later.",
  submitError: "Something went wrong sending your message. Please try again.",
} as const;
