import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  value: "Shop Now",
  link: "/shop",
  backgroundColor: "#000",
  textColor: "#fff",
  border: "1px solid #000",
  size: "small",
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: "Shop Now",
  link: "/shop",
  backgroundColor: "#fff",
  textColor: "#000",
  border: "1px solid #000",
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  value: "Shop Now",
  link: "/shop",
  backgroundColor: "#000",
  textColor: "#fff",
  border: "1px solid #000",
  size: "large",
};

export const Small = Template.bind({});
Small.args = {
  value: "Shop Now",
  link: "/shop",
  backgroundColor: "#000",
  textColor: "#fff",
  border: "1px solid #000",
  size: "small",
};
