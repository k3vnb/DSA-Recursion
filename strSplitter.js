// Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

const splitIt = function splitStr(str){
    if (str === '') {
        return ''
    }
    const arr = []
    arr.push(str.charAt(0), ...splitStr(str.substr(1)))
    return arr

}

console.log(splitIt("This is the test split."))
