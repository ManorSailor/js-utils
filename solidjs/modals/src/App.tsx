import { type Component } from "solid-js";
import { ConfirmationModal } from "./components/ConfirmationModal";
import { useConfirmationModal } from "./hooks/useConfirmationModal";

const App: Component = () => {
  const { showModal, ...props } = useConfirmationModal();

  return (
    <>
      <button onclick={showModal}>Show Modal</button>

      <ConfirmationModal {...props} />
    </>
  );
};

export default App;
