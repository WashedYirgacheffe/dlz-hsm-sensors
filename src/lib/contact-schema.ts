import { z } from "zod";

/**
 * The RFQ / contact schema.
 *
 * Shared between the client form and the route handler so the same rules
 * apply on both sides — the client copy exists only to show errors early,
 * never as the actual gate. Every field is length-capped because the body
 * is attacker-controlled and ends up in a database, an email and a
 * WhatsApp message.
 */

export const INTENTS = ["quote", "custom", "datasheet", "support", "other"] as const;
export type Intent = (typeof INTENTS)[number];

export const intentLabels: Record<Intent, string> = {
  quote: "Request a quote",
  custom: "Custom / non-standard build",
  datasheet: "Datasheet or documentation",
  support: "Technical support",
  other: "Something else",
};

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(80, "Please keep the name under 80 characters."),

  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(120, "Please keep the company name under 120 characters."),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(160, "Please keep the email under 160 characters."),

  country: z
    .string()
    .trim()
    .max(60, "Please keep the country under 60 characters.")
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .trim()
    .max(40, "Please keep the phone number under 40 characters.")
    .optional()
    .or(z.literal("")),

  intent: z.enum(INTENTS),

  /** Model code if the visitor arrived from a product page. */
  model: z
    .string()
    .trim()
    .max(60, "Please keep the model reference under 60 characters.")
    .optional()
    .or(z.literal("")),

  quantity: z
    .string()
    .trim()
    .max(60, "Please keep the quantity under 60 characters.")
    .optional()
    .or(z.literal("")),

  /** Which product family, so the enquiry can be routed. */
  category: z
    .string()
    .trim()
    .max(40, "Please keep the category under 40 characters.")
    .optional()
    .or(z.literal("")),

  /** Free-text process conditions or message. */
  message: z
    .string()
    .trim()
    .min(10, "Please describe the application in a sentence or two.")
    .max(4000, "Please keep the message under 4000 characters."),

  /**
   * Honeypot. Real visitors never see it and leave it empty; bots fill every
   * field they find. Anything here means the submission is discarded.
   */
  website: z.string().max(200).optional().or(z.literal("")),

  /** Milliseconds since the form mounted — a filled form under 1 s is a bot. */
  elapsedMs: z.number().int().nonnegative().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Fields the browser form owns; everything else is derived server-side. */
export type ContactFormValues = Omit<ContactInput, "elapsedMs">;
