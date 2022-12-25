const quizEl = document.getElementById("quiz");
const shuffle = document.getElementById("shuffle");

// you can change the questions in here
const questions = [
  { id: "q1", content: "quiz1" },
  { id: "q2", content: "quiz2" },
  { id: "q3", content: "quiz3" },
  { id: "q4", content: "quiz4" },
  { id: "q5", content: "quiz5" },
  { id: "q6", content: "quiz6" },
  { id: "q7", content: "quiz7" },
  { id: "q8", content: "quiz8" },
  { id: "q9", content: "quiz9" },
];

const randomNumber = (arrayLength) => {
  return Math.floor(Math.random() * arrayLength);
};

let quiz = randomNumber(questions.length);

quizEl.textContent = `${questions[quiz].content}`;

const generateRandomQuiz = () => {
  quizEl.textContent = `${questions[quiz].content}`;
};

shuffle.addEventListener("click", () => {
  quiz = randomNumber(questions.length);
  generateRandomQuiz();
});
