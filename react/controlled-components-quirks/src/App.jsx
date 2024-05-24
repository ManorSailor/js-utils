import InputHandlerOnly from "./components/Input/WithHandlerOnly";
import InputWithNullValue from "./components/Input/WithNullValue";
import InputValueOnly from "./components/Input/WithValueOnly";
import Label from "./components/Label";

function App() {
  return (
    <>
      <Label labelName={InputHandlerOnly.name}>
        <InputHandlerOnly />
      </Label>

      <Label labelName={InputValueOnly.name}>
        <InputValueOnly />
      </Label>

      <Label labelName={InputWithNullValue.name}>
        <InputWithNullValue />
      </Label>
    </>
  );
}

export default App;
