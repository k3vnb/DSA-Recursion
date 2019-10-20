// An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given word. For example, if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non-words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. For example, given "east", use "e" as a prefix and place it in front of all 6 permutations of "ast" — "ast", "ats", "sat", "sta", "tas", and "tsa". This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa". Continue this way until you find all the anagrams for "east". Then you can use "a" as a prefix and permute the remaining words "est". For "east", there should be 24 words.

// helper function
function swap(charArr, i, j){
    let temp = charArr[i]
    charArr[i] = charArr[j]
    charArr[j] = temp
    return charArr
}

function findAnagrams(chars, currentIndex = 0){
    let charArr
    //first iteration only receives a string, further iterations receive an arr
    typeof chars === "string" ? charArr = chars.split('') : charArr = chars
    //base case proxy, prints the joined arr as a string when it is at the last letter, hence last swap opportunity
    if (currentIndex === charArr.length - 1){
        console.log(charArr.join(''))
    }
    for (let i = currentIndex; i < charArr.length; i++){
        //swap current index w/ i
        swap(charArr, currentIndex, i)
        //recursively takes the swapping beginning with the next letter in the character array
        findAnagrams(charArr, currentIndex + 1)
        //backtracks the last swap 
        swap(charArr, currentIndex, i)
    }
}

findAnagrams('boats')
