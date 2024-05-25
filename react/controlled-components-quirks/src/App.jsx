import InputHandlerOnly from "./components/Input/WithHandlerOnly";
import InputWithNullValue from "./components/Input/WithNullValue";
import InputValueOnly from "./components/Input/WithValueOnly";
import Label from "./components/Label";

function App() {
  return (
    <>
      <Label htmlFor={InputHandlerOnly.name}>
        <Label.Name>{InputHandlerOnly.name}</Label.Name>
        <InputHandlerOnly />
      </Label>

      <Label htmlFor={InputValueOnly.name}>
        <Label.Name>{InputValueOnly.name}</Label.Name>
        <InputValueOnly />
      </Label>

      <Label htmlFor={InputWithNullValue.name}>
        <Label.Name>{InputWithNullValue.name}</Label.Name>
        <InputWithNullValue />
      </Label>
    </>
  );
}

export default App;
