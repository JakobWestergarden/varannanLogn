export default function questionRandomizer() {

  const questions = [
    {
      "question": "Vad heter jag?",
      "answer": "Jakob"
    },
    {
      "question": "Vad heter Sveriges statsminister?",
      "answer": "Magdalena Andersson"
    },
    {
      "question": "Vilket djur säger voff?",
      "answer": "Hund"
    },
    {
      "question": "Vad skulle du ha svarat på förra frågan?",
      "answer": "-"
    },
    {
      "question": "Vad säger katten?",
      "answer": "Mjau"
    },
    {
      "question": "Vad kallas min dialekt?",
      "answer": "-"
    },
    {
      "question": "Hur många meter är det på en kilometer?",
      "answer": "1000m"
    },
    {
      "question": "Hur förkortas Hennes & Mauritz",
      "answer": "H & M"
    },
    {
      "question": "Vad sparkar Zlatan Ibrahimovic?",
      "answer": "Boll"
    },
    {
      "question": "Vad kastar Daniel Ståhl?",
      "answer": "kula"
    },
    {
      "question": "Vad står ADHD för?",
      "answer": "Attention-Deficit/Hyperactivity Disorder"
    },
    {
      "question": "Vad heter du?",
      "answer": "-"
    }
  ]

  let counter = 0;
  const nbrOfQuestions = 10;
  const questionList = [];

  while (counter < nbrOfQuestions) {
    let size = questions.length
    let index = Math.floor(Math.random() * size)
    // let question = questions[index]
    let question = questions[index]
    while (questionList.includes(question)) {
      index = Math.floor(Math.random() * size);
      question = questions[index];
      // question = questions[index]
    }
    questionList.push(question);
    //availableQuestions.splice(index, 1)
    //console.log(question)
    counter++;
  }
  //console.log(questionList[1].question)
  return questionList;
}