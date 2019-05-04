let priorVal = 0;
let operator = '';
let answer = '';
let counter = 0;

let modifyValue = (val)=>{
    if (calc.screen.value === '' && val === '0'){
        val = '';
    }else{
        calc.screen.value += val;
    }
}

let resetVal = () => {
    calc.screen.value = '';
    priorVal = '';
    answer = '';
    operator = '';
    counter = 0;
}

let operation = (operatorValue)=>{
    if (operatorValue === 'addition'){
        counter += 1;
        priorVal += Number(calc.screen.value);
        operator = `${operatorValue}`;
        calc.screen.value = '';
    }
    else {
    priorVal += Number(calc.screen.value);
    operator = `${operatorValue}`;
    calc.screen.value = '';
    }
}

let equals = ()=>{
    if (operator === 'addition'){
        answer = Number(priorVal) + Number(calc.screen.value);
    } else if (operator === 'subtraction'){
        answer = Number(priorVal) - Number(calc.screen.value);
    } else if (operator === 'multiplication'){
        answer = Number(priorVal) * Number(calc.screen.value);
    } else if (operator === 'division'){
        answer = Number(priorVal) / Number(calc.screen.value);
    } else if (operator === 'modulo'){
        answer = Number(priorVal) % Number(calc.screen.value);
    }
    return calc.screen.value = answer;
}

let avg = ()=>{
    let average;
    counter += 1;
    priorVal += Number(calc.screen.value);
    average = priorVal / counter;
    calc.screen.value = average;
}