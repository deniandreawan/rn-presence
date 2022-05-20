import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AuthContext } from "../providers/AuthProvider";
import Button from "../components/Button";

export default function TabOneScreen() {
  const { handleSignOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Button borderless title={"Sign Out"} onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
