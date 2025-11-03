import { Button as CButton } from "@mantine/core";

export default function Button(props: {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}) {
  return (
    <CButton type={props.type ?? "submit"} fullWidth>
      {props.children}
    </CButton>
  );
}
