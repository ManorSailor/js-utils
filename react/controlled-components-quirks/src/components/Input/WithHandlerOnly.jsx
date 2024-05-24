export default function InputHandlerOnly({ handler }) {
  const onChange = (e) => {
    console.log(`${e.target.name}: Renders`);
  };

  return <input name="InputHandlerOnly" type="text" onChange={onChange} />;
}
