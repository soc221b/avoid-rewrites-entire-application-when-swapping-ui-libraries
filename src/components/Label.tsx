import React from "react";

export const LabelContext = React.createContext("");
export default function Label(props: { children: React.ReactNode }) {
  const label = React.Children.toArray(props.children)[0];
  if (typeof label !== "string") {
    throw Error();
  }

  const childrenWithoutLabel = React.Children.toArray(props.children).slice(1);

  return (
    <LabelContext.Provider value={label}>
      {childrenWithoutLabel}
    </LabelContext.Provider>
  );
}
