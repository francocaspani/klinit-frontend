import { FormState, GetCodeSchema } from "@/lib/definitions";

export async function getCode(state: FormState, formData: FormData) {
  // Validate form fields
  console.log(formData);
  
  const validatedFields = GetCodeSchema.safeParse({
    email: formData.get('email'),
  })
 
  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  // Call the provider or db to create a user...
}
