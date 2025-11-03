import { useForm } from "react-hook-form";
import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

export default function SignIn(props: {
  onSubmit: (data: { email: string }) => void;
}) {
  const { control, handleSubmit } = useForm({
    defaultValues: { email: "" },
  });

  return (
    <form onSubmit={handleSubmit((data) => props.onSubmit(data))}>
      <Label>
        Email
        <Input type="email" name="email" required control={control} />
      </Label>

      <Button>Submit</Button>
    </form>
  );
}
