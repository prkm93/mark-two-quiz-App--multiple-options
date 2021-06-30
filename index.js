const readLineSync = require('readline-sync');
const chalk = require('chalk');
let score = 0;

const questionLevel1 = [
    {
      options: ['eye','ear', 'tongue', 'nose'],
      question: "1.We smell with our? ",
      answer: "nose"
    },
    { 
      options: ['courier boy', 'postman','milkman', 'driver'],
      question: "2.What do you call the person who brings a letter to your home from post office? ",
      answer: "postman"
    },
    {
      options: ['north', 'west', 'east', 'south'],
      question: "3. In which direction does the sun rise?  ",
      answer: "east"
    },
    {
      options: ['23', '24', '25', '26'],
      question: "4.  How many letters are there in the English alphabet? ",
      answer: "26"
    }
];

const questionLevel2 = [
    {
    options: ['ironman', 'batman', 'spiderman', 'hulk'],
    question: "1.Who is my favorite superhero? ",
    answer: "ironman"
    },
    {
      options: ['najane', 'jal', 'tere bin', 'pal'],
      question: "2.Which is my favorite sad song? ",
      answer: "pal"
    },
    {
      options: ['Delhi', 'Mumbai', 'Kolkata', 'Mumbai'],
      question: "3.What is capital of India? ",
      answer: "Delhi"
    },
    {
      options: ['dhaka', 'istanbul', 'turkey','kabul'],
      question: "4.What is capital of Afghanistan? ",
      answer: "Kabul"
    }
];

console.log("For all correct answer +4 and wrong answers -1");
console.log("Welcome to level 1");

function quiz(question, options, answer) {
  let userAnswer = readLineSync.keyInSelect(options, question);
  console.log(chalk.cyanBright("Your answer", options[userAnswer]));

  if(userAnswer === -1) {
    console.log("You opted to skip the question!");  
  } else if (answer.toLowerCase() === options[userAnswer].toLowerCase()) {
    score= score+4;
    console.log(chalk.green('right!'));
    console.log(chalk.yellow('current score: ', score));
  } else {
    score--;
    console.log(chalk.red('wrong!'));
    console.log(chalk.yellow('current score: ', score));
  }

}

function loopOverQuestions(questionObject) {
  questionObject.forEach((item) => {
    quiz(item.question, item.options, item.answer);
  })
}

loopOverQuestions(questionLevel1);

if (score === Object.keys(questionLevel1).length*4) {
  console.log("Congrats! You passed level 1");
  console.log("Welcome to level 2!");
  loopOverQuestions(questionLevel2);
  console.log("Quiz Over!");
  console.log("Your final score is ", score);
} 