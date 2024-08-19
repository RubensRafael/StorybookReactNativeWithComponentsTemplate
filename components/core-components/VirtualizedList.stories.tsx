import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { VirtualizedList, View, Text } from "react-native";

const meta = {
  title: "Core Components/VirtualizedList",
  component: VirtualizedList,
  args: {
    getItem: (data: any[], index: number) => data[index],
    getItemCount: (data: any[]) => data.length,
    data: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
    renderItem: ({ item }) => (
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: "#000000",
        }}
      >
        <Text>{item as string}</Text>
      </View>
    ),
    keyExtractor: (item) => item as string,
  },
  argTypes: {
    data: { control: "object" },
    renderItem: { control: "function" },
    keyExtractor: { control: "function" },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof VirtualizedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
