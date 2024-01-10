function sumUntil(maxValue) {
    let result = 0;
    for(let i = maxValue; i > 0; i--){
      result += i;
    }
    return result;
  }
  
  
  console.log(sumUntil(5));