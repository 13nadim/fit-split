// routine.js
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { routines } from "./data";
import ProgressDots from "./progressDots";
import styles from "./styles";

export default function Routine() {
  const { days } = useLocalSearchParams();
  const router = useRouter();

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
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <ProgressDots total={3} active={3} />

          <Text style={styles.logo}>💪</Text>
          <Text style={styles.question}>Your Weekly Routine</Text>
          <Text style={styles.splitName}>{selected.name}</Text>
        </View>

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
