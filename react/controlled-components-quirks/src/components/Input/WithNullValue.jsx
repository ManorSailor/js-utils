export default function InputWithNullValue() {
  const onChange = (e) => {
    console.log(`${e.target.name}: Renders`);
  };

  return (
    <input
      name="InputWithNullValue"
      type="text"
      value={null}
      // value={undefined} // Behaves similarly
      onChange={onChange}
    />
  );
}
