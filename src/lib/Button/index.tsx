import "./index.css";

import classnames from "classnames";
import React, { Component } from "react";

type ButtonType = "default" | "primary" | "outline";
type ButtonSize = "large" | "default" | "small";

interface Props {
  type?: ButtonType;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

export default function Button({ type, size, children, onClick }: Props) {
  const cls = classnames({
    "x-button": true,
    "x-button-default": type === "default",
    [`x-button-${type}`]: type,
    [`x-button-size-${size}`]: size,
    "x-transition-base": true,
  });
  return (
    <button type="button" className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
