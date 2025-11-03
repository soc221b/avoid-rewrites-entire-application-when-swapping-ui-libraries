import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from "react-hook-form";
import { Input as _Input } from "@mantine/core";
import { useContext } from "react";
import { LabelIdContext } from "./Label";

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
  const id = useContext(LabelIdContext);

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
      <_Input id={id} {...field} error={fieldState.invalid} />
      <_Input.Error>
        {
          { required: "Required field", pattern: "Invalid email format" }[
            (fieldState.error?.type ?? "") as "required" | "pattern"
          ]
        }
      </_Input.Error>
    </>
  );
}
