import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, View } from "react-native";

const meta = {
  title: "Core Components/Button",
  component: Button,
  args: {
    title: "Click Me",
    onPress: () => {
      console.log("Button Pressed!");
    },
    color: "#841584",
    disabled: false,
  },
  argTypes: {
    title: { control: "text" },
    onPress: { action: "pressed" },
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
