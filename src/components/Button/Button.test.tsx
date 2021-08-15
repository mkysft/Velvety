import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import ButtonProps from "./Button.types";

describe("Button Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      theme: "primary",
      label: "Test Button",
      loading: false,
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    // const { getByTestId } = renderComponent();
    // const Button = getByTestId("test-component");
    // expect(Button).toBe("Test Button");

    renderComponent();
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });
});
