import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Switch, View } from "react-native";

const meta = {
  title: "Core Components/Switch",
  component: Switch,
  args: {
    value: false,
    onValueChange: (newValue: boolean) => {
      console.log(`Switch is now ${newValue ? "On" : "Off"}`);
    },
    disabled: false,
    thumbColor: "#f5dd4b",
    trackColor: { false: "#767577", true: "#81b0ff" },
  },
  argTypes: {
    value: { control: "boolean" },
    onValueChange: { action: "value changed" },
    disabled: { control: "boolean" },
    thumbColor: { control: "color" },
    trackColor: { control: "object" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
