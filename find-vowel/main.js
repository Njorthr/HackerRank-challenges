/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let str = s.toLowerCase()
    const vowels = /[aeiou]/g;
    const vowelRes = str.match(vowels)
    vowelRes.forEach(a => console.log(a))
    const nonVowels = /[b-df-hj-np-tv-z]/g;
    const nonVowelRes = str.match(nonVowels)
    nonVowelRes.forEach(a => console.log(a))
}
