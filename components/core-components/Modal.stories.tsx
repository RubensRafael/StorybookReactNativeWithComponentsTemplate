import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { Modal, View, Text, Button } from "react-native";

const meta = {
  title: "Core Components/Modal",
  component: Modal,
  args: {
    visible: true,
    transparent: true,
    animationType: "slide",
    onRequestClose: () => {
      console.log("Modal closed.");
    },
  },
  argTypes: {
    visible: { control: "boolean" },
    transparent: { control: "boolean" },
    animationType: {
      control: { type: "select" },
      options: ["none", "slide", "fade"],
    },
    onRequestClose: { action: "modal closed" },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16, flex: 1, justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: ({ transparent, animationType }) => {
    const [visible, setVisible] = useState(false);

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Modal
          visible={visible}
          transparent={transparent}
          animationType={animationType}
          onRequestClose={() => {}}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <View
              style={{
                width: 300,
                padding: 20,
                backgroundColor: "white",
                borderRadius: 10,
              }}
            >
              <Text>Hello World!</Text>
              <Button title="Close Modal" onPress={() => setVisible(false)} />
            </View>
          </View>
        </Modal>
        <Button title="Show Modal" onPress={() => setVisible(true)} />
      </View>
    );
  },
};
