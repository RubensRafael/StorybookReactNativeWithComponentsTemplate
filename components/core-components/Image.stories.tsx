import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Image, View } from "react-native";

const meta = {
  title: "Core Components/Image",
  component: Image,
  args: {
    source: { uri: "https://reactnative.dev/img/tiny_logo.png" },
    style: { width: 100, height: 100 },
    resizeMode: "cover",
    onLoad: () => {
      console.log("Image Loaded!");
    },
    onError: () => {
      console.log("Failed to load image!");
    },
  },
  argTypes: {
    source: { control: "object" },
    style: { control: "object" },
    resizeMode: {
      control: { type: "select" },
      options: ["cover", "contain", "stretch", "repeat", "center"],
    },
    onLoad: { action: "loaded" },
    onError: { action: "error" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
