import { z } from "zod";
import type { FormField } from "../config/userFormConfig";

export const generateZodSchema = (fields: FormField[]) => {
  const shape: Record<string, any> = {};

  fields.forEach((field) => {
    let validator = z.string();

    if (field.required) {
      validator = validator.min(1, `${field.label} is required`);
    }

    if (field.type === "email") {
      validator = validator.email("Invalid email address");
    }

    if (field.type === "phone") {
      validator = validator.regex(
        /^[0-9]{10}$/,
        "Phone number must be 10 digits"
      );
    }

    shape[field.name] = validator;
  });

  return z.object(shape);
};
