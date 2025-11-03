export default function Label(props: { children: React.ReactNode }) {
  return (
    <label className='has-[[aria-invalid="true"]]:text-red-400'>
      {props.children}
    </label>
  );
}
