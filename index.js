var readlineSync = require('readline-sync');
var score=0;
var userName = readlineSync.question("What is your name? ");
var welcomeMsg = "Welcome to the quiz " + userName + "! Let's see how will you answer";

var highScore=[
  {
    name:"aditya",
    score:5,
  },
  {
    name:"chandan",
    score:3,
  }
]
function quiz1(questions,answer)
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
        question:"what is tony stark best suit?  ",
        answer:"marklxxxv"
      },
      {
        question:"which company car is mostly used by tony stark ",
        answer:"audi"
      },
      {
        question:"what is tony stark if not Irnoman ",
        answer:"scientist"
      },
      {
        question:"which year iron man 1 is released? ",
        answer:"2008"
      },
      {
        question: "What is the name of tony stark daughter? ",
        answer: "morgan stark"
      }
    ];
for(var i=0;i<questionList.length;i++)
      {
        quiz1(questionList[i].question,questionList[i].answer)
      }
console.log("total score is ",score);
for(var j=0;j<highScore.length;j++)
  {
    console.log(highScore[j].name+ ":" + highScore[j].score);
  }