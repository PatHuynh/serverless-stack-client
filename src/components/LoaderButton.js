import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoaderButton({
  isLoading,
  className = "btn-light",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${isLoading && className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {!isLoading && props.children}
      {isLoading && "Loading..."}
    </Button>
  );
}
