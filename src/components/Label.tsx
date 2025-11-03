import { Input } from "@mantine/core";
import React from "react";

export const LabelIdContext = React.createContext("");

export default function Label(props: { children: React.ReactNode }) {
  const id = React.useId();

  const label = React.Children.toArray(props.children)[0];
  if (typeof label !== "string") {
    throw Error();
  }

  const childrenWithoutLabel = React.Children.toArray(props.children).slice(1);

  return (
    <LabelIdContext.Provider value={id}>
      <Input.Label htmlFor={id}>{label}</Input.Label>
      {childrenWithoutLabel}
    </LabelIdContext.Provider>
  );
}
