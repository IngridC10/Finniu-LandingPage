"use server";
import { RECOVERY_PASSWORD } from "../../graphql/mutation";
import { GraphQLClient } from "graphql-request";

interface RecoveryPasswordResponse {
  recoveryPassword: {
    success: boolean;
    successSendCode: boolean;
  };
}

interface RecoveryPasswordInput {
  email: string;
}

const client = new GraphQLClient("https://finniu.com/api/v1/graph/finniu/");

export async function recoveryPassword(
  input: RecoveryPasswordInput
): Promise<{ success: boolean; successSendCode: boolean }> {
  try {
    if (!input.email || !input.email.includes("@")) {
      throw new Error("El correo electrónico es inválido");
    }

    const parameters = {
      email: input.email,
    };

    const result = await client.request<RecoveryPasswordResponse>(
      RECOVERY_PASSWORD,
      parameters
    );

    console.log("Respuesta de GraphQL:", result);

    const { success, successSendCode } = result.recoveryPassword;

    if (!successSendCode) {
      console.warn("El código de recuperación no pudo ser enviado.");
    }
    console.log("Resultado de la función recoveryPassword:", {
      success,
      successSendCode,
    });

    return { success, successSendCode };
  } catch (error: any) {
    console.error(
      "Error en la recuperación de contraseña:",
      error.message || error
    );

    return { success: false, successSendCode: false };
  }
}
