import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const meta = {
  title: "Core Components/ActivityIndicator",
  component: ActivityIndicator,
  args: {
    size: "large",
    color: "#0050ff",
    animating: true,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "large"],
    },
    color: { control: "color" },
    animating: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ActivityIndicator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
