"use server";
import { VALIDATE_OTP } from "../../graphql/mutation";
import { useGraphQLClient } from "../../graphql/client";

interface ValidateOtpInput {
  email: string;
  otpCode: string;
  action: string;
}

interface ValidateOtpResponse {
  validOtpUser: {
    success: boolean;
  };
}

export async function validateOtpAction(
  input: ValidateOtpInput
): Promise<boolean> {
  try {
    const client = useGraphQLClient();
    if (!input.email || !input.otpCode || !input.action) {
      throw new Error("Todos los campos son requeridos.");
    }

    const result = await client.request<ValidateOtpResponse>(
      VALIDATE_OTP,
      input
    );

    const { success } = result.validOtpUser;

    console.log("Resultado de la función validateOtp:", {
      success,
    });

    return success;
  } catch (error: any) {
    console.error("Error al validar OTP:", error.message || error);

    return false;
  }
}
