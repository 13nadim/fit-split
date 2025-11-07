import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ProgressDots from "./components/progressDots";
import { recommendations } from "./constants/data";
import styles from "./styles/styles";

export default function Recommendation() {
  const router = useRouter();
  const { days } = useLocalSearchParams();

  const selected = recommendations[days] || {
    name: "Custom Split",
    desc: "Your personalised training plan awaits.",
  };

  return (
    <LinearGradient colors={["#cbe4ff", "#ffffff"]} style={styles.gradient}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <ProgressDots total={3} active={2} />

          <Text style={styles.logo}>🗒️</Text>
          <Text style={styles.question}>Your Optimal Workout Split</Text>
          <Text style={styles.splitName}>{selected.name}</Text>
        </View>

        <View style={styles.middleContainer}>
          <Text style={styles.wtw}>Why this works:</Text>
          <Text style={styles.description}>{selected.desc}</Text>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              router.push({ pathname: "/routine", params: { days } })
            }
          >
            <Text style={styles.buttonText}>View Routine</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/question")}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
