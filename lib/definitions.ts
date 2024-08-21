import { z } from "zod";

export const GetCodeSchema = z.object({
  email: z.string().email({ message: "Ingresa un email valido" }).trim(),
});

export type FormState =
  | {
      errors?: {
        email?: string[];
      };
      message?: string;
    }
  | undefined;
