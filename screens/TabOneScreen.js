import { StyleSheet, View } from "react-native";
import { signOut } from "firebase/auth";

import { auth } from "../config/firebase";
import Button from "../components/Button";

export default function TabOneScreen() {
  const handleSignOut = () => {
    signOut(auth).catch((error) => console.log("Error logging out: ", error));
  };

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
