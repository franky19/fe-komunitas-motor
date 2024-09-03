// lib/validationSchema.ts
import * as yup from "yup";
import sanitizeHtml from "sanitize-html";

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

/**
 * Sanitizes input to prevent XSS attacks by removing all HTML tags and attributes.
 * @param input - The user input to be sanitized.
 * @returns The sanitized input.
 */
export const sanitizeInput = (input: string): string => {
    return sanitizeHtml(input, {
        allowedTags: [], // Disallow all HTML tags
        allowedAttributes: {},
    });
};