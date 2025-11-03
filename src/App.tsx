import ThemeProvider from "./components/ThemeProvider";
import SignIn from "./SignIn";
import "@mantine/core/styles.css";

export default function App() {
  const onSubmit = () => {
    alert("Submitted");
  };

  return (
    <ThemeProvider>
      {" "}
      <SignIn onSubmit={onSubmit} />
    </ThemeProvider>
  );
}
