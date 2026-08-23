"use server";

import { contactSchema, type ContactInput } from "@/lib/validations/contact";

export interface InquiryResult {
  status: "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<keyof ContactInput, string>>;
}

function mapFieldErrors(error: ReturnType<typeof contactSchema.safeParse>) {
  if (error.success) return undefined;
  const flattened = error.error.flatten().fieldErrors;
  return Object.fromEntries(
    Object.entries(flattened).map(([key, messages]) => [key, messages?.[0]]),
  ) as Partial<Record<keyof ContactInput, string>>;
}

export async function submitInquiry(input: ContactInput): Promise<InquiryResult> {
  if (input.website) {
    return { status: "success", message: "Thank you. Your request has been received." };
  }

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors: mapFieldErrors(parsed),
    };
  }

  return {
    status: "success",
    message: "Thank you. Your project brief has been sent to the S.N Group team.",
  };
}
