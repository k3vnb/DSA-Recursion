// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = function reverseStr(str){
    if (str === '') {
        return ''
    } else {
        return reverseStr(str.substr(1)) + str.charAt(0)
    }
    
}

console.log(reverseString('hello'))