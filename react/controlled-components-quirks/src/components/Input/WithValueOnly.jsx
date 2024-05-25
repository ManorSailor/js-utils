// Becomes a read-only field. User cannot edit it at all even if they try changing it via DevTools
// React will throw a warning in console if you do it this way.
// Use `readOnly = {true}` prop instead
export default function InputValueOnly({ state }) {
  return (
    <input
      id="InputValueOnly"
      name="InputValueOnly"
      type="text"
      value={state ?? "Nope"}
    />
  );
}
