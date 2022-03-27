const resultFeedback = require("../components/resultFeedback.json");

export function getResponse(string, res) {
  let result = string.split(".");
  let myVar =
    (resultFeedback[result[0]][result[1]].scale.max -
      resultFeedback[result[0]][result[1]].scale.median) /
    2;
  let higher = resultFeedback[result[0]][result[1]].scale.median + myVar;
  let lower = resultFeedback[result[0]][result[1]].scale.median - myVar / 2;
  if (res >= higher) {
    return resultFeedback[result[0]][result[1]].high;
  }
  if (res > lower && res < higher) {
    if (resultFeedback[result[0]][result[1]].medium === undefined) {
      return resultFeedback[result[0]][result[1]].high;
    } else {
      return resultFeedback[result[0]][result[1]].medium;
    }
  } else {
    return resultFeedback[result[0]][result[1]].low;
  }
}
