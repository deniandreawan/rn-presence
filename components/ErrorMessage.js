import React from "react";
import { StyleSheet, Text } from "react-native";

export default function ErrorMessage({ error, visible }) {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
}

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 14,
    marginVertical: 5,
    fontWeight: "600",
  },
});
