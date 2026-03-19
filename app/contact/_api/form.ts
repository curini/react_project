"use server";

export const handleSubmitForm = async (
  state: { error: boolean; message: string },
  data: FormData,
) => {
  const message = data.get("message") ? "" + data.get("message") : "";
  if (message.length > 4) {
    return { error: false, message: "Message valide." };
  } else {
    return {
      error: true,
      message: "Message invalide, il doit être supérieur à 4 caractères.",
    };
  }
};
