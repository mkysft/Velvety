import React from "react";

import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

// Velvety
import VelvetProvider from "./VelvetProvider";
import VelvetProviderProps from "./VelvetProvider.types";

export default {
  title: "Components/VelvetProvider",
  component: VelvetProvider,
} as Meta;

// Master Template
const Template: Story<VelvetProviderProps> = (args) => <VelvetProvider {...args} />;

// Example
export const Example = Template.bind({});
Example.args = { theme: "velvet" };
