import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ScrollView, View, Text } from "react-native";

const meta = {
  title: "Core Components/ScrollView",
  component: ScrollView,
  args: {
    contentContainerStyle: { padding: 16 },
    horizontal: false,
    showsVerticalScrollIndicator: true,
    showsHorizontalScrollIndicator: true,
  },
  argTypes: {
    contentContainerStyle: { control: "object" },
    horizontal: { control: "boolean" },
    showsVerticalScrollIndicator: { control: "boolean" },
    showsHorizontalScrollIndicator: { control: "boolean" },
    onScroll: { action: "scrolled" },
    onContentSizeChange: { action: "content size changed" },
  },
  decorators: [
    (Story) => (
      <View style={{ height: 200 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof ScrollView>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
      <>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
        <Text>Item 5</Text>
        <Text>Item 6</Text>
        <Text>Item 7</Text>
        <Text>Item 8</Text>
        <Text>Item 9</Text>
        <Text>Item 10</Text>
      </>
    ),
  },
};
