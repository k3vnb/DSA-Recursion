// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculatorRec(10,2) should return 100
// powerCalculatorRec(10,-2) should return exponent should be >= 0

const powerCalculator = function pc(num, powerOf){
    if (powerOf <= 0) return 'exponent should be >= 0'
    if (powerOf === 1){
        return num
    }
    const result = num * pc(num, powerOf - 1)
    return result
}

console.log(powerCalculator(7, 14))