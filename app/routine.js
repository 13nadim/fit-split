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
      name: "Full Body Workout",
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      routine: [
        "Workout",
        "Rest",
        "Workout",
        "Rest",
        "Workout",
        "Rest",
        "Rest",
      ],
    },
    "4 days": {
      name: "Upper / Lower Split",
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      routine: ["Upper", "Lower", "Rest", "Upper", "Lower", "Rest", "Rest"],
    },
    "5 days": {
      name: "Push / Pull / Legs | Upper / Lower",
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      routine: ["Push", "Pull", "Legs", "Rest", "Upper", "Lower", "Rest"],
    },
    "6 days": {
      name: "Push / Pull / Legs",
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      routine: ["Push", "Pull", "Legs", "Rest", "Push", "Pull", "Legs"],
    },
  };

  const selected = routines[days] || {
    name: "Custom Routine",
    week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    routine: ["Workout", "Rest", "Workout", "Rest", "Workout", "Rest", "Rest"],
  };

  return (
    <LinearGradient colors={["#cbe4ff", "#ffffff"]} style={styles.gradient}>
      {/* Main container */}
      <View style={styles.mainContainer}>
        {/* Top Section */}
        <View style={styles.topContainer}>
          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressDot, styles.activeDot]} />
            <View style={[styles.progressDot, styles.activeDot]} />
            <View style={[styles.progressDot, styles.activeDot]} />
          </View>

          <Text style={styles.logo}>🏋️‍♂️💤</Text>
          <Text style={styles.question}>Your Weekly Routine</Text>
          <Text style={styles.splitName}>{selected.name}</Text>
        </View>

        {/* Middle Section - Timeline */}
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

        {/* Bottom Section - Buttons */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() =>
            router.push({ pathname: "/recommendation", params: { days } })
          }
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push("/")}
          >
            <Text style={styles.buttonText}>Return Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
