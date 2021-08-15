import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import ButtonProps from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      theme: "velvet",
      label: "Test Button",
      loading: false,
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have test text", () => {
    const { getByTestId } = renderComponent();
    const Button = getByTestId("Button");
    // expect(Button).toBe("Test Button");

    renderComponent();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
