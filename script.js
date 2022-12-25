const quizEl = document.getElementById("quiz");
const shuffle = document.getElementById("shuffle");

// you can change the questions in here
const questions = [
  { id: "q1", content: "test1" },
  { id: "q2", content: "test2" },
  { id: "q3", content: "test3" },
  { id: "q4", content: "test4" },
  { id: "q5", content: "test5" },
  { id: "q6", content: "test6" },
  { id: "q7", content: "test7" },
  { id: "q8", content: "test8" },
  { id: "q9", content: "test9" },
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
