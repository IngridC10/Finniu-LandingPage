"use server";
import { CHANGE_PASSWORD } from "../../graphql/mutation";
import { useGraphQLClient } from "../../graphql/client";

interface ChangePasswordResponse {
  changePasswordMinimal: {
    success: boolean;
  };
}

interface ChangePasswordInput {
  email: string;
  newPassword: string;
}

export async function changePassWordAction(
  input: ChangePasswordInput
): Promise<{ success: boolean }> {
  try {
    const client = useGraphQLClient();
    if (!input.email || !input.email.includes("@")) {
      throw new Error("El correo electrónico es inválido.");
    }

    if (!input.newPassword || input.newPassword.length < 6) {
      throw new Error("La nueva contraseña debe tener al menos 6 caracteres.");
    }

    const variables = {
      email: input.email,
      newPassword: input.newPassword,
    };

    const result = await client.request<ChangePasswordResponse>(
      CHANGE_PASSWORD,
      variables
    );

    const { success } = result.changePasswordMinimal;

    if (!success) {
      console.warn("No se pudo cambiar la contraseña.");
    }

    return { success };
  } catch (error: any) {
    console.error("Error al cambiar la contraseña:", error.message || error);

    return { success: false };
  }
}
