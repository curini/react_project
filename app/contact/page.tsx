import Form from "./_component/form";
import Title from "@/app/_component/title";
import { handleSubmitForm } from "@/app/contact/_api/form";

export default function Page() {
  return (
    <>
      <Title>Contact</Title>
      <Form handleSubmitForm={handleSubmitForm}></Form>
    </>
  );
}
