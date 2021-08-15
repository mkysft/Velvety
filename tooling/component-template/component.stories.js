module.exports = (componentName) => ({
  content: `import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ${componentName} from "./${componentName}";
import ${componentName}Props from "./${componentName}.types";

export default {
  title: "Components/${componentName}",
  component: ${componentName},
} as Meta;

// Master Template
const Template: Story<${componentName}Props> = (args) => <${componentName} {...args} />;

// Example
export const Example = Template.bind({});
Example.args = { theme: "velvet" };
  `,
  extension: `.stories.tsx`,
});
