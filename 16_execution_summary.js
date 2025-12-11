// JavaScript Execution Context

// {} -> Globaln Execution Context
// -> Function Execution Context
// -> Eval Execution Context

// {} -> Memory Creation Phase
//    -> Execution Phase

// Example  
// 1 Phase -Global Execution

// 2 Phase - Memory Phase
// let val1 = 10  ---> undefind
// let vsl2  = 5  ---> undefind

// 3 Phase - Execution Phase
// function addNum(num1, num2){ ---> Defination
//    let total = num1 + num2    ----> defination
//    return total               ----> Defination
//}
// let result1 = addNum(val1, val2) ----> result1 -> undefined
// let result2 = addNum(10, 2)      ----> result2 -> undefined