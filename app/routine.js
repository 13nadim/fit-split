// routine.js
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles"; // import external styles

export default function Routine() {
  const { days } = useLocalSearchParams();
  const router = useRouter();

  const routines = {
    "3 days": {
      name: "Full Body",
      week: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      routine: [
        "Full Body",
        "Rest",
        "Full Body",
        "Rest",
        "Full Body",
        "Rest",
        "Rest",
      ],
    },
    "4 days": {
      name: "Upper/Lower",
      week: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      routine: ["Upper", "Lower", "Rest", "Upper", "Lower", "Rest", "Rest"],
    },
    "5 days": {
      name: "Push/Pull/Legs + Upper/Lower",
      week: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      routine: ["Push", "Pull", "Legs", "Rest", "Upper", "Lower", "Rest"],
    },
    "6 days": {
      name: "Push/Pull/Legs",
      week: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      routine: ["Push", "Pull", "Legs", "Rest", "Push", "Pull", "Legs"],
    },
  };

  const selected = routines[days] || {
    name: "Custom Routine",
    week: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    routine: ["Workout", "Rest", "Workout", "Rest", "Workout", "Rest", "Rest"],
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
            <View style={[styles.progressDot, styles.activeDot]} />
          </View>

          <Text style={styles.logo}>💪</Text>
          <Text style={styles.question}>Your Weekly Routine</Text>
          <Text style={styles.splitName}>{selected.name}</Text>
        </View>

        {/* Middle Section - Timeline centered */}
        <View style={styles.timelineContainer}>
          {selected.week.map((day, index) => {
            const isRest = selected.routine[index] === "Rest";
            return (
              <View key={index} style={styles.timelineItem}>
                <View
                  style={[
                    styles.dot,
                    { backgroundColor: isRest ? "#ccc" : "#007BFF" },
                  ]}
                />
                <View
                  style={[
                    styles.card,
                    { backgroundColor: isRest ? "#f3f3f3" : "#a4d0ff" },
                  ]}
                >
                  <Text style={styles.day}>{day}</Text>
                  <Text style={[styles.routineText, isRest && styles.restText]}>
                    {selected.routine[index]}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>

        {/* Bottom Section - Button */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push({ pathname: "/", params: { days } })}
          >
            <Text style={styles.buttonText}>Return Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
