import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import VelvetProvider from "../VelvetProvider/VelvetProvider";
import Button from "./Button";
import ButtonProps from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <VelvetProvider>
        <Story />
      </VelvetProvider>
    ),
  ],
} as Meta;

// Master Template
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Solid
export const Solid = Template.bind({});
Solid.args = { label: "Solid", variant: "solid", size: "md", loading: false };

// Outline
export const Outline = Template.bind({});
Outline.args = { label: "Outline", variant: "outline", size: "md", loading: false };

// Icon
export const Icon = Template.bind({});
Icon.args = { label: "☀", variant: "icon", size: "md", loading: false };

// Text
export const Text = Template.bind({});
Text.args = { label: "Text", variant: "text", size: "md", loading: false };
