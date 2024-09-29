import React from "react";

export interface DialogProps {
  label: string;
}

const Dialog = (props: DialogProps) => {
  return <div>{props.label}我是一个dialog</div>;
};

export default Dialog;