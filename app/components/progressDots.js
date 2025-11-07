// progressDots.js
import { StyleSheet, View } from "react-native";

export default function ProgressDots({ total = 3, active = 0 }) {
  const dots = Array.from({ length: total });

  return (
    <View style={styles.progressContainer}>
      {dots.map((_, index) => (
        <View
          key={index}
          style={[styles.progressDot, index < active && styles.activeDot]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginBottom: 12,
  },
  progressDot: {
    width: 30,
    height: 4,
    backgroundColor: "#e0e0e0",
    borderRadius: 2,
  },
  activeDot: {
    backgroundColor: "#007BFF",
  },
});
