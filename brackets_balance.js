const areTheParenthesesEqual = (s) => {

    let sArray = s.split('');
    let stack = [];
    for (let i = 0; i < sArray.length; i++) {

        if (sArray[i] === '(' || sArray[i] === '{' || sArray[i] === '[') {
            stack.push(sArray[i])
        }

        if ((sArray[i] === ')' || sArray[i] === '}' || sArray[i] === ']') && stack.length === 0) {
            return false;
        }

        if (sArray[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                return false;
            }
        }

        if (sArray[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop()
            } else {
                return false;
            }
        }

        if (sArray[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                return false;
            }
        }

    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }

}


console.log(areTheParenthesesEqual(' (( /*+ { -*/ ( ) } xxa )() as) '));
console.log(areTheParenthesesEqual(' ()( xc {(( a) )} ()'));
console.log(areTheParenthesesEqual(' { a (( 56 kl [] ))} '));
