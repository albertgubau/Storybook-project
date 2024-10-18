import { ComponentProps } from "react";
import Button from "../components/Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

// Props of the story of the Button
type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

// Properties and setup configuration for our Button story
const meta: Meta<StoryProps> = {
  // The component to be rendered
  component: Button,
  // If we add autodocs line for tags Storybook generated documentation automatically
  tags: ["autodocs"],
  // Argument types (i.e, for each StoryProp we can define if it is changed with an input or a dropdown )
  argTypes: {
    variant: {
      // The variant arg has a selector of two options in the story
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "select",
      },
    },
    onClick: { table: { disable: true } },
  },
  // In order to control the clicks in the actions tab
  args: {
    onClick: fn(),
  },
};

export default meta;

// The story will have the type StoryObj taking into account the StoryProps type we defined above
type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    buttonText: "Hello",
    variant: "primary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Secondary: Story = {
  args: {
    buttonText: "Hello",
    variant: "secondary",
    size: "md",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
