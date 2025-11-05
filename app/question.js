import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function Question() {
  const router = useRouter();

  const options = [
    { label: "3 days" },
    { label: "4 days" },
    { label: "5 days" },
    { label: "6 days" },
  ];

  return (
    <LinearGradient colors={["#cbe4ff", "#ffffff"]} style={styles.gradient}>
      {/* Main container with space-between layout */}
      <View style={styles.mainContainer}>
        {/* Top Section */}
        <View style={styles.topContainer}>
          {/* Progress Indicator */}
          <View style={styles.progressContainer}>
            <View style={[styles.progressDot, styles.activeDot]} />
            <View style={styles.progressDot} />
            <View style={styles.progressDot} />
          </View>

          <Text style={styles.logo}>🗓️</Text>
          <Text style={styles.question}>
            How many days a week do you aim to visit the gym?
          </Text>

          <Text style={styles.message}>
            Consistency is key,{"\n"}start with a manageable routine.
          </Text>

          {/* Options */}
          <View style={styles.optionsContainer}>
            {options.map((option) => (
              <TouchableOpacity
                key={option.label}
                style={styles.daysButton}
                onPress={() =>
                  router.push({
                    pathname: "/recommendation",
                    params: { days: option.label },
                  })
                }
              >
                <Text style={styles.daysText}>{option.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Cancel button pinned to bottom */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.backButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
