export const questionObject = [
  {
    id: 1,
    text: "Pick a fruit:",
    options: [
      { id: 1, text: "Apple 🍎" },
      { id: 2, text: "Banana 🍌" },
      { id: 3, text: "Orange 🍊" },
      { id: 4, text: "Pineapple 🍍" }
    ],
    prevId: null,
    nextId: 2,
    defaultAnswer: "Apple",
  },
  {
    id: 2,
    text: "Pick an animal:",
    options: [
      { id: 1, text: "Elephant 🐘" },
      { id: 2, text: "Tiger 🐅" },
      { id: 3, text: "Giraffe 🦒" },
      { id: 4, text: "Dolphin 🐬" }
    ],
    prevId: 1,
    withPathing: true,
    path1NextId: 3,
    path2NextId: 5,
    defaultAnswer: "Giraffe",
  },
  {
    id: 3,
    text: "What is your favorite season? 🌱🏖🍂❄️",
    options: [
      { id: 1, text: "Spring"},
      { id: 2, text: "Summer"},
      { id: 3, text: "Autumn"},
      { id: 4, text: "Winter"}
    ],
    prevId: 2,
    nextId: 4,
    defaultAnswer: "Spring",
  },
  {
    id: 4,
    text: "Enter a date of importance to you 📆:",
    inputType: "date",
    prevId: 3,
    isLast: true,
    defaultAnswer: "2025-07-07"
  },
  {
    id: 5,
    text: "How many hours of sleep do you get per night? ⏰",
    inputType: "number",
    prevId: 2,
    nextId: 6,
    defaultAnswer: "6",
  },
  {
    id: 6,
    text: "Enter a present that you want to get 🎁:",
    inputType: "text",
    prevId: 5,
    isLast: true,
    defaultAnswer: "BMW X5",
  }
];

