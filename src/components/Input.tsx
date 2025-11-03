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
    <span className="relative group">
      <input
        {...field}
        aria-invalid={fieldState.invalid}
        className="border rounded outline-0 px-2 mx-1 aria-invalid:border-red-400"
      />
      <span className='hidden group-has-[[aria-invalid="true"]]:block absolute mb-2 left-1/2 -translate-x-1/2 text-red-400 text-sm px-2 rounded-md whitespace-nowrap bg-gray-200'>
        {
          { required: "Required field", pattern: "Invalid email format" }[
            (fieldState.error?.type ?? "") as "required" | "pattern"
          ]
        }
      </span>
    </span>
  );
}
