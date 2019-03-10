export const updateObject = (oldObject: any, updatedValues: any) => {
  return {
    ...oldObject,
    ...updatedValues
   }
};

export const random = (range=0, offset=0) => {
  return Math.floor(Math.random() * range) + offset
};

export const whoWon = (playerChoice="", computerChoice="") => {
  if (playerChoice === computerChoice) {
    return "tie";
  } else {
    switch (playerChoice) {
      case "Rock": {
        if(computerChoice === "Scissors") return "player"
        else return "computer"
      }
      case "Paper": {
        if(computerChoice === "Rock") return "player"
        else return "computer"
      }
      case "Scissors": {
        if(computerChoice === "Paper") return "player"
        else return "computer"
      }
      default: {
        return "error: unexpected results"
      }
    }
  }
}
