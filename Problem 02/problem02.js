function repeats(array) {
    let obj = {}
    let repeats = [];
    for (x = 0, length = array.length; x < length; x++) {
      let l = array[x]
      obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    return obj;
  }
  
  function checkEqualFrequency(inputArray) {
    const rep = repeats(inputArray);
    const newRep = Object.values(rep);
    const length = newRep[0];
    for (const key in newRep) {
      const element = newRep[key];
      if (element !== length) {
        return false;
      }
    }
    return true;
  }
    console.log(checkEqualFrequency([1,2,2,1]));
    console.log(checkEqualFrequency([1,2,2,3,1,3,1,3]));