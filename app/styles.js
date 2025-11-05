import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // General containers
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Logo / title / subtitle
  logo: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffffff",
    marginBottom: 6,
    textAlign: "center",
  },
  splitName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#007BFF",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#ffffffff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 10,
  },
  topSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  header: {
    alignItems: "center",
    marginBottom: 15,
  },

  question: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 6,
    textAlign: "center",
  },

  message: {
    fontSize: 16,
    color: "#000000ff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 50,
  },

  wtw: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000ff",
    marginBottom: 8,
  },

  description: {
    textAlign: "left",
    fontSize: 16,
    color: "#000000ff",
    lineHeight: 22,
  },

  // Progress dots
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

  // Middle section (options/buttons)

  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },

  daysButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 14,
    width: "120%", // match the back button’s visual width
    borderRadius: 10,
    alignSelf: "center", // ensures it centers in the screen, not within a possibly smaller container
    paddingLeft: 15,
  },

  daysText: {
    color: "#ffffffff",
    fontSize: 18,
    textAlign: "left",
  },

  // Back / cancel buttons
  backButton: {
    borderWidth: 2,
    borderColor: "#a4d0ff",
    borderRadius: 10,
    paddingVertical: 14,
  },
  backButtonText: {
    color: "#001F54",
    fontSize: 18,
    textAlign: "center",
  },
  cancelButton: {
    borderWidth: 2,
    borderColor: "#a4d0ff",
    borderRadius: 10,
    paddingVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  cancelText: {
    color: "#001F54",
    fontSize: 16,
    fontWeight: "600",
  },

  // Timeline styles
  timelineContainer: {
    width: "100%",
    maxHeight: 300,
    justifyContent: "space-between",
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 12,
  },
  card: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  day: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 2,
    color: "#001F54",
  },
  routineText: {
    fontSize: 15,
    color: "#001F54",
  },
  restText: {
    color: "#999",
    fontStyle: "italic",
  },

  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
  },

  middleContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 150, // pull it upward slightly
  },

  optionsContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
    gap: 15,
  },
});

export default styles;
