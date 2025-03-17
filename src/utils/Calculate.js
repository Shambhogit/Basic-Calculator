function isDigit(char){
    if(char === '.') return true;
    if(char>='0' && char<='9') return true;
    return false;
}

function solve(num1, num2, operation){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // console.log(num1, num2);

    if(operation == '+') return num1+num2;
    else if(operation == '-') return num1-num2;
    else if(operation == '*') return num1*num2;
    else if(operation == '/') return num1/num2;
}

let solveExpression = (expression) => {
    let ans = 'undefined';
    let num1 = '';

    for(let i = 0;i<expression.length;){
        if(ans === 'undefined'){
            while(i<expression.length && isDigit(expression[i])){
                num1 += expression[i];
                i++;
            }
        }

        let operation = expression[i];
        i++;

        let num2 = '';
        while(i<expression.length && isDigit(expression[i])){
            num2 += expression[i];
            i++;
        }

        // console.log(num1);
        // console.log(operation);
        // console.log(num2);


        if(num2==='') return 'error';

       
        if(ans==='undefined'){
            ans = solve(num1, num2, operation);
        }else{
            ans = solve(ans, num2, operation);
        }

        // console.log(ans);
    }

    return ans;
}


export default solveExpression;