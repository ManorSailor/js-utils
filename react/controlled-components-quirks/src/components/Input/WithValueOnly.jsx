export default function InputValueOnly({ state }) {
  return <input name="InputValueOnly" type="text" value={state ?? "Nope"} />;
}
