// Same as an uncontrolled component
export default function InputWithNullValue() {
  const onChange = (e) => {
    console.log(`${e.target.name}: Renders`);
  };

  return (
    <input
      id="InputWithNullValue"
      name="InputWithNullValue"
      type="text"
      value={null}
      // value={undefined} // Behaves similarly
      onChange={onChange}
    />
  );
}
