// @ts-nocheck
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SectionList, View, Text } from "react-native";

const meta = {
  title: "Core Components/SectionList",
  component: SectionList,
  args: {
    sections: [
      { title: "A", data: Array.from({ length: 5 }, (_, i) => `A${i + 1}`) },
      { title: "B", data: Array.from({ length: 5 }, (_, i) => `B${i + 1}`) },
    ],
    renderItem: ({ item }) => (
      <View
        style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: "#ccc" }}
      >
        <Text>{item as string}</Text>
      </View>
    ),
    renderSectionHeader: ({ section }) => (
      <View style={{ padding: 16, backgroundColor: "#f0f0f0" }}>
        <Text style={{ fontWeight: "bold" }}>{section.title}</Text>
      </View>
    ),
    keyExtractor: (item: string) => item as string,
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
  },
  argTypes: {
    sections: { control: "object" },
    renderItem: { control: "function" },
    renderSectionHeader: { control: "function" },
    keyExtractor: { control: "function" },
    ListHeaderComponent: { control: "function" },
    ListFooterComponent: { control: "function" },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof SectionList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
