import React from "react";

import { render, screen } from "@testing-library/react";

// Velvety
import VelvetProvider from "./VelvetProvider";
import VelvetProviderProps from "./VelvetProvider.types";

describe("VelvetProvider Component", () => {
  let props: VelvetProviderProps;

  beforeEach(() => {
    props = {
      scheme: "velvet",
    };
  });

  const renderComponent = () => render(<VelvetProvider {...props} />);

  // Insert "it" tests here
});
