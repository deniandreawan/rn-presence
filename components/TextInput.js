import React from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";

import Button from "./Button";
import Icon from "./Icon";

export default function TextInput({
  rightIcon,
  handlePasswordVisibility,
  ...props
}) {
  return (
    <View style={styles.container}>
      <RNTextInput style={styles.input} {...props} />
      {rightIcon ? (
        <Button onPress={handlePasswordVisibility}>
          <Icon
            name={rightIcon}
            size={22}
            color="gray"
            style={{ marginRight: 10 }}
          />
        </Button>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    flexDirection: "row",
    padding: 12,
    marginVertical: 12,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
  },
  input: {
    flex: 1,
    fontSize: 18,
    width: "100%",
    color: "#000",
  },
});
