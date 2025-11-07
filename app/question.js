import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import ProgressDots from "./components/progressDots";
import { options } from "./constants/data";

import styles from "./styles/styles";

export default function Question() {
  const router = useRouter();

  return (
    <LinearGradient colors={["#cbe4ff", "#ffffff"]} style={styles.gradient}>
      <View style={styles.mainContainer}>
        <View style={styles.topContainer}>
          <ProgressDots total={3} active={1} />

          <Text style={styles.logo}>🗓️</Text>
          <Text style={styles.question}>
            How many days a week do you aim to visit the gym?
          </Text>

          <Text style={styles.message}>
            Consistency is key,{"\n"}start with a manageable routine.
          </Text>

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
