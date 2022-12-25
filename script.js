const quizEl = document.getElementById("quiz");
const shuffle = document.getElementById("shuffle");

// you can change the questions in here
const questions = [
  { id: "q1", content: "How can I encourage myself when I'm doing something new?" },
  { id: "q2", content: "How can I recharge?" },
  { id: "q3", content: "What's a choice I can make today that will advocate for my needs?" },
  { id: "q4", content: "How can I practice radical self-acceptance?" },
  { id: "q5", content: "What boundaries can I set to protect my most authentic self?" },
  { id: "q6", content: "A list of things that help me slow down and feel more present" },
  { id: "q7", content: "What can I do or change in my life to focus more on my well-being?" },
  { id: "q8", content: "How would I like to be remembered?" },
  { id: "q9", content: "Make a list of all your greatest strengths." },
  { id: "q10", content: "What's ahobby you've always wanted to do but never got to? What's stopping you now?" },
  { id: "q11", content: "How am I really doing right now? Physically, mentally, socially, and spiritually?" },
  { id: "q12", content: "Write about the place and envirinment you grew up. How has it shaped you?" },
  { id: "q13", content: "What childhood memory do I cherish the most? Why?" },
  { id: "q14", content: "What childhood memory do I avoid thinking about? Why?" },
  { id: "q15", content: "What brings me joy?" },
  { id: "q16", content: "Make a list of the things you love. It could be anything big or small. Write as much as you can." },
  { id: "q17", content: "When do I feel the happiest in my own skin?" },
  { id: "q18", content: "What does growing older mean to me?" },
  { id: "q12", content: "What scares you?" },
  { id: "q13", content: "Write down the words you need to hear right now." },
  { id: "q14", content: "Are you a spiritual person? What are your beliefs and how do they affect how you live your life?" },
  { id: "q15", content: "Write a letter to your future self." },
  { id: "q16", content: "What does kindness mean to you?" },
  { id: "q17", content: "What challenges have I overcome recently?" },
  { id: "q18", content: "Write down the moments you feel most confident and secure." },
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
