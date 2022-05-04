function LetterCountI(str) {
    const baseWords = str.split(" ") 
    const words = str.toLowerCase().split(" ")
    let splitted
    let counter = 0;
    let scores = []
    // looping each word
    words.forEach(word => {
      // splitting each word to its letters
      splitted = word.split("")
      // looping through letters
      for(let i = 0; i < splitted.length; i++) {
        // checking if there is a repeated letter if yes incrementing the counter if not countinue
        if(splitted.indexOf(splitted[i]) !== splitted.lastIndexOf(splitted[i])) {
          counter++
        }
        
      }
      // pushing number of repetition of each word to an array
        scores.push(counter)
      // reseting counter after looping a word is complete
        counter = 0;
        
    })
    
    // getting the index of first word with greatest number of repeated letters
    const resultIndex = scores.indexOf(Math.max(...scores))
    // getting the max repetition. will use it to check if there is repetition
    const result = Math.max(...scores)
    
    // checking the result for repetition. if there is, printing the word if not returning -1
    return result ? baseWords[resultIndex] : -1
  }