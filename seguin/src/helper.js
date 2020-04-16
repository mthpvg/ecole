
export const updateScore = (state) => {
  const newState = {}
  newState.score = state.score + 1;
  if (newState.score === 10) {
    newState.wins = state.wins + 1;
    newState.score = 0
  }
  return newState
}
