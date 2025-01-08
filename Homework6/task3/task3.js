//Task3

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "In which year did the Titanic sink?",
    options: ["1905", "1912", "1920", "1931"],
    correctAnswer: "1912",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

let quizContainer = document.getElementById("quiz-container");
let formElement = document.createElement("form");
quizContainer.appendChild(formElement);

let orderedList = document.createElement("ol");
formElement.appendChild(orderedList);

function createQuiz(questionsArray) {
  questionsArray.forEach((questionData, index) => {
    let listItem = document.createElement("li");
    // console.log(questionData);
    orderedList.appendChild(listItem);
    let listItemText = questionData.question;
    listItem.innerText = listItemText;

    const questionChoicesContainer = document.createElement("div");
    orderedList.appendChild(questionChoicesContainer);

    questionChoicesContainer.classList.add("question-choices");

    questionData.options.forEach((option, i) => {
      // console.log(option);

      const radioButton = document.createElement("input");
      radioButton.type = "radio";
      radioButton.name = `question-${index}`;
      radioButton.value = option;
      radioButton.id = `option${i}-question${index}`;
      // console.log(radioButton);

      const label = document.createElement("label");
      label.textContent = option;
      // console.log(label);

      questionChoicesContainer.appendChild(radioButton);
      questionChoicesContainer.appendChild(label);
    });
  });
}

createQuiz(quizData);
