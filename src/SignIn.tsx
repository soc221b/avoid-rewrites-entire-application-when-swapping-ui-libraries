import { useForm } from "@tanstack/react-form";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

export default function SignIn(props: {
  onSubmit: (data: { email: string }) => void;
}) {
  const form = useForm({
    defaultValues: { email: "" },
    onSubmit: (data) => props.onSubmit(data.value),
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <Label>
        Email
        <Input type="email" name="email" required form={form} />
      </Label>

      <Button>Submit</Button>
    </form>
  );
}
