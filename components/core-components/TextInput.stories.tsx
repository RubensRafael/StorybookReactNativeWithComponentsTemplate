import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { TextInput, View } from "react-native";

const meta = {
  title: "Core Components/TextInput",
  component: TextInput,
  args: {
    value: "Hello world",
    placeholder: "Enter text here",
    onChangeText: (text: string) => {
      console.log(`Text changed: ${text}`);
    },
    onFocus: () => {
      console.log("Input focused!");
    },
    onBlur: () => {
      console.log("Input blurred!");
    },
  },
  argTypes: {
    value: { control: "text" },
    placeholder: { control: "text" },
    style: { control: "object" },
    onChangeText: { action: "text changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    editable: { control: "boolean" },
    secureTextEntry: { control: "boolean" },
    keyboardType: {
      control: { type: "select" },
      options: ["default", "email-address", "numeric", "phone-pad"],
    },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
