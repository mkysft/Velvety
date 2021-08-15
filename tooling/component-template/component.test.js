module.exports = (componentName) => ({
  content: `import React from "react";
    
import { render, screen } from "@testing-library/react";
import ${componentName} from "./${componentName}";
import ${componentName}Props from "./${componentName}.types";

describe("${componentName} Component", () => {
  let props: ${componentName}Props;

  beforeEach(() => {
    props = {
      theme: "velvet",
    };
  });

  const renderComponent = () => render(<${componentName} {...props} />);

  // Insert "it" tests here
  
});
  `,
  extension: `.test.tsx`,
});
