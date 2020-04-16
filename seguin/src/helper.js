
export const updateScore = (state) => {
  const newState = {}
  newState.score = state.score + 1;
  if (newState.score === 10) {
    newState.wins = state.wins + 1;
    if (newState.wins === 8) {
      newState.medals = state.medals + 1;
      newState.wins = 0
    }
    newState.score = 0
  }
  return newState
}
