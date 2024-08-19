import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Text, View } from "react-native";

const meta = {
  title: "Core Components/Text",
  component: Text,
  args: {
    children: "Hello world",
    onPress: () => {
      console.log("Pressed!");
    },
  },
  argTypes: {
    children: { control: "text" },
    style: { control: "object" },
    id: { control: "text" },
    onPress: { action: "pressed" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
