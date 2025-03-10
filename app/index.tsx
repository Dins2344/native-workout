import { useState } from "react";
import { Button, Modal, Text, View, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  // const txtCount = [1, 2, 3, 4, 5, 6, 7, 8, 910, 11, 12, 13, 14, 15,16,17,18,19];
  const txtCount = [...new Array(20)].map((_,i)=>i)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Text>Hello World</Text>
        <Button title="Click Me" onPress={() => setIsOpen(true)}></Button>

        <Modal
          transparent={true}
          visible={isOpen}
          animationType="slide"
          onRequestClose={() => setIsOpen(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalDiv}>
              <ScrollView style={{ display: "flex", flexDirection: "column" }}>
              {txtCount.map((count,i) => (
                <Text key={i}>Hi Iam open {i}</Text>
              ))}
            </ScrollView>
              {/* <ScrollView style={{ display: "flex", flexDirection: "column" }}>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
                <Text>Hi Iam open</Text>
              </ScrollView> */}
              <Button
                title="Click Me"
                onPress={() => setIsOpen(false)}
              ></Button>
            </View>
          </View>
        </Modal>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalDiv: {
    width: "100%",
    height: "50%",
    // margin: 50,
    padding: 30,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.55,
    elevation: 5,
  },
});
