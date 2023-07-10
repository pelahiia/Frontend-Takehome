# 🚀 Frontend Test Task @OofOne Takehome 🚀

The "Prediction App" is a web application designed to provide personalized predictions to users based on their input. By answering a series of questions, users will receive unique predictions tailored to their responses. The app analyzes the user's answers and generates predictions that align with their individual preferences, characteristics, or circumstances. Whether it's predicting future outcomes, offering insights, or providing guidance, the Prediction App aims to deliver a personalized and engaging user experience. Explore the app, uncover intriguing predictions, and embark on an exciting journey of discovery.

[DEMO LINK](https://takehome-frontend.vercel.app/) 💫

## Table of Contents

- [Tech Stack](#-tech-stack)
- [Questions](#-questions)
- [General Structure](#-general-structure)
- [Pathing](#-pathing)

## 🛠️ Tech Stack

- TypeScript
- React
- Next.js
- HTML
- CSS (Sass)
- Libraries: moment.js (for working with date), axios (interacting with APIs in the project)

## ❓ Questions

The **questionObject** array contains a set of questions and options for a prediction app. Each question has a unique ID, text, and options. Some questions have input types such as date or number. The array is used to provide a dynamic and interactive user experience in generating unique predictions based on user responses. If a user chooses to skip a question by clicking "Next," default answers are provided to ensure a seamless progression through the prediction process.

## 🔗 General Structure

**QuizComponent** is a functional component that represents the main quiz component. It manages the state related to the current question, history stack, answers, and the visibility of the result page. It uses the useState hook to manage the state. The component renders the QuestionComponent when there is a current question and the result page when showResult is true. It also renders the **Navigation** component, which handles navigation between questions. The sendFormResult function is responsible for sending the form results to the server.

**QuestionComponent** is a functional component that represents a single question. It receives the question object and **handleNext** function as props. It manages the state for input values related to the question (such as date, number, and text inputs) using the useState hook. The component renders the question text and options if they exist, or renders an input field based on the inputType property of the question. The **handleCustomSubmit** function handles the submission of the custom input answer.

The **ResultPage** component displays the final prediction based on the user's answers. It determines whether the user took the first path or the second path and generates a unique result text accordingly. The component also sends the form results to the server if any of the questions have the isLast property set to true.

## 🔀 Pathing

The **isFirstPath** function determines whether the user took the first path or the second path in the prediction process. It takes the user's answers as input and calculates the sum of the lengths of answers for question 1 and question 2. If the sum is divisible by 2, it returns true, indicating that the user took the first path. Otherwise, it returns false, indicating that the user took the second path. This function is used in the ResultPage component to determine the appropriate result text based on the user's chosen path.
