// Write a recursive function that prints out the binary representation of a given number. For example, the program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note that the binary representation of 0 should be 0.

function printBinary(num){
    if(num === 0){
        return 0
    }
    //each iteration should return either 1 or 0, plus 10 * the next iteration
    return num % 2 + (10 * printBinary(Math.floor(num / 2)))
}
console.log(printBinary(25))