import SignIn from "./SignIn";

export default function App() {
  const onSubmit = () => {
    alert("Submitted");
  };

  return <SignIn onSubmit={onSubmit} />;
}
