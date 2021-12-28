export default function calculateGameEnd(questionNbr, endTime) {
  totalPoints = 10;
  let now = new Date().getTime();
  console.log("now: " + now)
  console.log("endTime: " + endTime)
  setInterval(() => now = new Date().getTime(), 100)

  if (questionNbr === totalPoints || now > endTime) {
    return 'end';
  } else return (
    'questions'
  )
}