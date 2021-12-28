export default function calculateGameEnd(questionNbr, timer) {
  totalPoints = 9;

  if (questionNbr === totalPoints || timer <= 0) {
    return 'end';
  } else return (
    'questions'
  )
}