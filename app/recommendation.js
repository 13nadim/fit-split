import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"; // import external styles

export default function Recommendation() {
  const router = useRouter();
  const { days } = useLocalSearchParams();

  const recommendations = {
    "3 days": {
      name: "Full Body",
      desc: "Perfect for balanced recovery and all-round progress.",
    },
    "4 days": {
      name: "Upper/Lower",
      desc: "A smart balance of strength and hypertrophy across the week.",
    },
    "5 days": {
      name: "Push/Pull/Legs + Upper/Lower",
      desc: "Ideal for muscle growth and training variety.",
    },
    "6 days": {
      name: "Push/Pull/Legs",
      desc: "High-frequency training with optimal recovery windows.",
    },
  };

  const selected = recommendations[days] || {
    name: "Custom Split",
    desc: "Your personalised training plan awaits.",
  };

  return (
    <LinearGradient colors={["#cbe4ff", "#ffffff"]} style={styles.gradient}>
      {/* Main container with space-between layout */}
      <View style={styles.mainContainer}>
        {/* Top Section */}
        <View style={styles.topContainer}>
          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressDot, styles.activeDot]} />
            <View style={[styles.progressDot, styles.activeDot]} />
            <View style={styles.progressDot} />
          </View>

          <Text style={styles.logo}>🗒️</Text>
          <Text style={styles.question}>Your Optimal Workout Split</Text>
          <Text style={styles.splitName}>{selected.name}</Text>
        </View>

        {/* Middle Section - Why this works */}
        <View style={styles.middleContainer}>
          <Text style={styles.wtw}>Why this works:</Text>
          <Text style={styles.description}>{selected.desc}</Text>
        </View>

        {/* Bottom Section - Buttons */}
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
