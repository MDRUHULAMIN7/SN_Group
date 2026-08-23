import { describe, expect, it } from "vitest";
import { contactDefaultValues, contactSchema } from "@/lib/validations/contact";

const validInput = {
  ...contactDefaultValues,
  name: "Rahim Ahmed",
  email: "rahim@example.com",
  phone: "+880 1700 000000",
  service: "general-construction",
  message: "We are planning a commercial building in Dhaka next year.",
};

describe("contactSchema", () => {
  it("accepts a complete, valid project enquiry", () => {
    expect(contactSchema.safeParse(validInput).success).toBe(true);
  });

  it("rejects malformed contact details and a short brief", () => {
    const result = contactSchema.safeParse({ ...validInput, email: "not-an-email", phone: "abc", message: "Too short" });
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      expect(errors.email).toBeDefined();
      expect(errors.phone).toBeDefined();
      expect(errors.message).toBeDefined();
    }
  });

  it("rejects a populated honeypot", () => {
    expect(contactSchema.safeParse({ ...validInput, website: "spam.example" }).success).toBe(false);
  });
});
