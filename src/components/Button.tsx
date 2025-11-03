import MuiButton from "@mui/material/Button";

export default function Button(props: {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}) {
  return (
    <MuiButton
      variant="contained"
      type={props.type ?? "submit" /* default type for button is 'submit' */}
    >
      {props.children}
    </MuiButton>
  );
}
