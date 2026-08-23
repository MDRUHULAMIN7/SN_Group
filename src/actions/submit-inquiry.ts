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

  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return {
      status: "error",
      message: "Online delivery is not configured yet. Please email query@sngroup.com or call +88 01305-771144.",
    };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, website: undefined, submittedAt: new Date().toISOString() }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error("Delivery adapter rejected the request.");
    return {
      status: "success",
      message: "Thank you. Your project brief has been sent to the S.N Group team.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not send your request right now. Please email query@sngroup.com or try again shortly.",
    };
  }
}
