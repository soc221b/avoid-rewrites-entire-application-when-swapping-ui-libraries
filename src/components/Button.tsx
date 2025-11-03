export default function Button(props: { children: React.ReactNode }) {
  return (
    <button className="inline-flex rounded bg-black px-2 py-0.75 text-sm text-white hover:bg-gray-800 cursor-pointer">
      {props.children}
    </button>
  );
}
