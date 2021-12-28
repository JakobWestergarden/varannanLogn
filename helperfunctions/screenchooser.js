export default function screenChoser(actualAnswer, correctAnswer) {

  if (actualAnswer === correctAnswer) {
    return 'correct';
  } else return (
    'incorrect'
  )
}