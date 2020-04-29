const testVar = {}

function superbowlWin(record) {
  return record.result === "W"
}

record.find(superbowlWin).year
