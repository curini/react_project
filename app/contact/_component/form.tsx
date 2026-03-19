"use client";
import { useActionState } from "react";

export default function Form({
  handleSubmitForm,
}: {
  handleSubmitForm: (
    state: { error: boolean; message: string },
    FormData: FormData,
  ) => Promise<{ error: boolean; message: string }>;
}) {
  const [state, submitAction] = useActionState(handleSubmitForm, {
    error: false,
    message: "",
  });
  return (
    <>
      <form action={submitAction}>
        <div className="mt-2 mb-2">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
            className="block border border-[#ddd]"
            name="message"
          />
        </div>

        <button
          className="cursor-pointer border px-2 py-2 text-white bg-black hover:bg-[#ddd] hover:text-[#333]"
          type="submit"
        >
          Valider
        </button>
      </form>
      {state.error && <span>{state.message}</span>}
    </>
  );
}
