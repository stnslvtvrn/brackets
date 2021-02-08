module.exports = function check(str, bracketsConfig) {
  let newArr = str.split('');
  let iteration = newArr.length / 2;
  for (let i = 0; i < iteration; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] == "{" && newArr[j + 1] == "}" || newArr[j] == "[" && newArr[j + 1] == "]" ||
          newArr[j] == "(" && newArr[j + 1] == ")" || newArr[j] == "|" && newArr[j + 1] == "|" ||
          newArr[j] == "1" && newArr[j + 1] == "2" || newArr[j] == "3" && newArr[j + 1] == "4" ||
          newArr[j] == "5" && newArr[j + 1] == "6" || newArr[j] == "7" && newArr[j + 1] == "7" ||
          newArr[j] == "8" && newArr[j + 1] == "8")
          newArr.splice(j, 2);
    }
  }
  return newArr.length == 0 ? true : false;
}

