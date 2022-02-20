var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What is your name? ");
var welcomeMsg = "Welcome to the quiz " + userName + "! Let's see how well you know me!";
console.log(welcomeMsg);
var highScore=[
  {
    name:"nikhil",
    score:5,
  },
  {
    name:"srinevas",
    score:3,
  }
]
function quiz(questions,answer)
{
    var userAns = readlineSync.question(questions);
    if(answer.toUpperCase()===userAns.toUpperCase())
    {
      console.log("correct answer");
      score++;
      console.log(score);
    }
    else
    {
      console.log("wrong answer");
      score--;
      console.log(score);
      
    }
  
}

var questionList=[
{
        question:"where do i live? ",
        answer:"kurnool"
      },
      {
        question:"what is my favourite car? ",
        answer:"rangerover"
      },
      {
        question:"who is my favourite superhero? ",
        answer:"ironman"
      },
      {
        question:"what is my favourite games genre? ",
        answer:"racing"
      },
      {
        question: "What is my favourite colour? ",
        answer: "orange"
      }
    ];
for(var i=0;i<questionList.length;i++)
      {
        quiz(questionList[i].question,questionList[i].answer)
      }
console.log("total score is ",score);
for(var j=0;j<highScore.length;j++)
  {
    console.log(highScore[j].name+ ":" + highScore[j].score);
  }