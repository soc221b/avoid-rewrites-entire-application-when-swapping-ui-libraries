import { ReactFormExtendedApi } from "@tanstack/react-form";

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export default function Input<
  TForm extends ReactFormExtendedApi<
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any,
    any
  >
>(props: {
  type?: "text" | "email";
  name: keyof TForm["fieldInfo"];
  required: boolean;
  form: TForm;
}) {
  const required = (value: string) =>
    props.required && value.trim().length === 0 ? "Required field" : null;

  const email = (value: string) =>
    props.type === "email" &&
    typeof value === "string" &&
    emailPattern.test(value) === false
      ? "Invalid email format"
      : null;

  return (
    <>
      <props.form.Field
        // TODO: type safe
        name={props.name as any}
        validators={{
          onChange: ({ value }) => required(value) ?? email(value),
        }}
        children={(field) => {
          return (
            <>
              <input
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
              />
              <span style={{ color: "red" }}>{field.state.meta.errors[0]}</span>
            </>
          );
        }}
      ></props.form.Field>
    </>
  );
}
