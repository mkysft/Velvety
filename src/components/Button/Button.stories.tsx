import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "./Button";
import ButtonProps from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Master Template
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Solid
export const Solid = Template.bind({});
Solid.args = { label: "Solid 😃", size: "md", loading: false };

// Outline
export const Outline = Template.bind({});
Outline.args = { label: "Outline 😃", size: "md", loading: false };
