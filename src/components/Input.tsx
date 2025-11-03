import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/;

export default function Input<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues
>(props: {
  type?: "text" | "email";
  name: FieldPath<TFieldValues>;
  required: boolean;
  control: Control<TFieldValues, TContext, TTransformedValues>;
}) {
  const { field, fieldState } = useController({
    name: props.name,
    control: props.control,
    rules: {
      required: props.required,
      pattern: props.type === "email" ? emailPattern : undefined,
    },
  });

  return (
    <>
      <input {...field} />
      <span style={{ color: "red" }}>
        {
          { required: "Required field", pattern: "Invalid email format" }[
            (fieldState.error?.type ?? "") as "required" | "pattern"
          ]
        }
      </span>
    </>
  );
}
