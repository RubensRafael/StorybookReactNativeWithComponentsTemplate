import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";

const meta = {
  title: "Core Components/View",
  component: View,
  args: {
    children: "Hello world",
  },
  argTypes: {
    children: { control: "text" },
    style: { control: "object" },
    id: { control: "text" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof View>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
