import SignIn from "./SignIn";
import { Provider } from "./components/ui/provider";

export default function App() {
  const onSubmit = () => {
    alert("Submitted");
  };

  return (
    <Provider>
      <SignIn onSubmit={onSubmit} />
    </Provider>
  );
}
