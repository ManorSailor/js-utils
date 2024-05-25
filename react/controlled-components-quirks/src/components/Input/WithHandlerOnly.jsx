// Behaves like an Uncontrolled Component
// You can watch for changes without causing re-renders*
// Unless while watching for changes you change some state either local or via a prop.someCallback
export default function InputHandlerOnly({ handler }) {
  const onChange = (e) => {
    console.log(`${e.target.name} Runs`);
  };

  return (
    <input
      id="InputHandlerOnly"
      name="InputHandlerOnly"
      type="text"
      onChange={onChange}
    />
  );
}
