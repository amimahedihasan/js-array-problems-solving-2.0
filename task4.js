//- ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`

// ---

const statement = 'I am a hard working person' 
// let words = statement.split(" ")
// let rev = '';
// for( let word of words){
//      rev = word + " " + rev;
// }
// console.log(rev)   

let rev = []
let words = statement.split(" ")
for(let i = words.length-1; i>= 0; i--){
    console.log(words[i])
    rev.push(words[i])
}
console.log(rev.join(' '))