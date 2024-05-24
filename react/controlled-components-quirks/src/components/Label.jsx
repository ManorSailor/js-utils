export default function Label({ labelName, children }) {
  return (
    <label>
      <span className="">{labelName}</span>
      {children}
    </label>
  );
}
