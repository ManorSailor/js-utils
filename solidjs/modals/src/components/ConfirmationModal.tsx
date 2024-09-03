import { Component } from "solid-js";
import { BaseModal, BaseModalProps } from "./BaseModal";

export type ConfirmationModalProps = {
  title: string;
  onOk: () => void;
  onCancel: () => void;
} & BaseModalProps;

export const ConfirmationModal: Component<ConfirmationModalProps> = (props) => {
  return (
    <BaseModal ref={props.ref}>
      <h3>{props.title}</h3>
      <button onclick={props.onOk}>Ok</button>
      <button onclick={props.onCancel}>Cancel</button>
    </BaseModal>
  );
};
