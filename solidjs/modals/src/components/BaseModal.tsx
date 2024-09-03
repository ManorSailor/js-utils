import type { ParentComponent, Ref } from "solid-js";
import { Portal } from "solid-js/web";

export type BaseModalProps = {
  ref: Ref<HTMLDialogElement>;
};

export const BaseModal: ParentComponent<BaseModalProps> = (props) => {
  return (
    <Portal>
      <dialog ref={props.ref}>{props.children}</dialog>
    </Portal>
  );
};
