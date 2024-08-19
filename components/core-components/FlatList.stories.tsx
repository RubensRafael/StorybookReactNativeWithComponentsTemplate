import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { FlatList, View, Text } from "react-native";

const meta = {
  title: "Core Components/FlatList",
  component: FlatList,
  args: {
    data: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
    renderItem: ({ item }) => (
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item as string}</Text>
      </View>
    ),
    keyExtractor: (item) => item as string,
    ListHeaderComponent: () => (
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Text>Header</Text>
      </View>
    ),
    ListFooterComponent: () => (
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Text>Footer</Text>
      </View>
    ),
    ItemSeparatorComponent: () => (
      <View style={{ height: 1, backgroundColor: "#ccc" }} />
    ),
  },
  argTypes: {
    data: { control: "object" },
    renderItem: { control: "function" },
    keyExtractor: { control: "function" },
    ListHeaderComponent: { control: "function" },
    ListFooterComponent: { control: "function" },
    ItemSeparatorComponent: { control: "function" },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof FlatList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
