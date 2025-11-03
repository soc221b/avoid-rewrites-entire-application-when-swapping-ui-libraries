export default function SignIn(props: {
  onSubmit: (data: { email: string }) => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.target as HTMLFormElement);
        props.onSubmit({ email: data.get("email") as string });
      }}
    >
      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <button>Submit</button>
    </form>
  );
}
