import { z } from "zod";

const optionalShortText = z.string().trim().max(120, "Keep this under 120 characters.");

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name.").max(80, "Keep this under 80 characters."),
  company: optionalShortText,
  email: z.email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number.")
    .max(24, "Enter a valid phone number.")
    .regex(/^[+()\-\s\d]+$/, "Use only numbers and standard phone symbols."),
  service: z.string().min(1, "Select a service."),
  projectLocation: optionalShortText,
  estimatedBudget: optionalShortText,
  message: z.string().trim().min(20, "Tell us a little more (at least 20 characters).").max(2_000, "Keep this under 2,000 characters."),
  website: z.string().max(0, "Spam check failed."),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const contactDefaultValues: ContactInput = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  projectLocation: "",
  estimatedBudget: "",
  message: "",
  website: "",
};
