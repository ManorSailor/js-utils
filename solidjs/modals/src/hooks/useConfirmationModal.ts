import type { ConfirmationModalProps } from "../components/ConfirmationModal";

type ConfirmationModal = {
  showModal: () => void;
  isOpen: () => boolean;
} & ConfirmationModalProps;

export const useConfirmationModal: () => ConfirmationModal = () => {
  let modalRef: HTMLDialogElement | undefined;

  return {
    title: "Are you sure?",
    ref: (elem) => (modalRef = elem),
    showModal: () => modalRef?.showModal(),
    onOk: () => console.log(modalRef),
    onCancel: () => modalRef?.close(),
    isOpen: () => modalRef?.open ?? false,
  };
};
