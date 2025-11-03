import Button from "./components/Button";
import Input from "./components/Input";
import Label from "./components/Label";

export default function SignIn(props: {
  onSubmit: (data: { email: string }) => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        props.onSubmit({ email: data.get("email") as string });
      }}
    >
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>

      <Button>Submit</Button>
    </form>
  );
}
