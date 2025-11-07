// data.js

export const options = [
  { label: "3 days" },
  { label: "4 days" },
  { label: "5 days" },
  { label: "6 days" },
];

export const recommendations = {
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

export const routines = {
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
