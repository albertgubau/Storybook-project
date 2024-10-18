import { ComponentProps } from "react";
import Stack from "../components/Stack";
import { Meta, StoryObj } from "@storybook/react";

// Props of the story of the Button
type StoryProps = ComponentProps<typeof Stack> & {
  numberOfChildren: number;
};

// Properties and setup configuration for our Button story
const meta: Meta<StoryProps> = {
  // The component to be rendered
  component: Stack,
  // If we add autodocs line for tags Storybook generated documentation automatically
  tags: ["autodocs"],
  // Argument types (i.e, for each StoryProp we can define if it is changed with an input or a dropdown )
  argTypes: {
    numberOfChildren: {
      options: [1, 5, 10],
      control: {
        type: "select",
      },
    },
    orientation: {
      options: ["horizontal", "vertical"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    numberOfChildren: 5,
  },
};

export default meta;

// The story will have the type StoryObj taking into account the StoryProps type we defined above
type Story = StoryObj<StoryProps>;

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: ({ numberOfChildren, ...args }) => {
    return <Stack {...args}>{createChildren(numberOfChildren)}</Stack>;
  },
};

/**
 * Function that returns a specified amount of childrens (red divs)
 * @param numberOfChildren
 * @returns Collection of numberOfChildren red divs
 */
function createChildren(numberOfChildren: number) {
  return Array(numberOfChildren)
    .fill(null)
    .map((_, index) => {
      return (
        <div
          key={index}
          style={{ width: 100, height: 100, backgroundColor: "red" }}></div>
      );
    });
}
