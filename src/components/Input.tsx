export default function Input(props: {
  type: string;
  name: string;
  required: boolean;
}) {
  return (
    <input type={props.type} name={props.name} required={props.required} />
  );
}
