import { MantineProvider, createTheme } from "@mantine/core";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  return (
    <MantineProvider theme={createTheme({})}>{props.children}</MantineProvider>
  );
}
