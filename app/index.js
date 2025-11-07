// Homepage for app

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles/styles";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#007BFF", "#001F54"]} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.logo}>🏋️‍♂️</Text>
        <Text style={styles.title}>FitSplit</Text>
        <Text style={styles.subtitle}>
          Personalised workout splits{"\n"}designed around your schedule.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/question")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
