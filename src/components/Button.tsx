import { Button as CButton } from "@chakra-ui/react";

export default function Button(props: {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}) {
  return <CButton type={props.type}>{props.children}</CButton>;
}
