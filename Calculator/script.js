let input = document.getElementById('inputBox');
let bottons = document.querySelectorAll('button')

let arr = Array.from(bottons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (input.value != '') {
            if (e.target.innerHTML === '^')
                if (!input.value.endsWith(' '))
                    input.value += ' ^ ';
                else
                    input.value += '';
            else if (e.target.innerHTML === 'x')
                if (!input.value.endsWith(' '))
                    input.value += ' x ';
                else
                    input.value += '';
            else if (e.target.innerHTML === '÷')
                if (!input.value.endsWith(' '))
                    input.value += ' ÷ ';
                else
                    input.value += '';
            else if (e.target.innerHTML === '%')
                if (!input.value.endsWith(' '))
                    input.value += ' ' + e.target.innerHTML + ' ';
                else
                    input.value += '';
            else if (e.target.innerHTML === '+' || e.target.innerHTML === '-')
                input.value += ' ' + e.target.innerHTML;
            else if (e.target.innerHTML === 'AC')
                input.value = '';
            else if (e.target.innerHTML === '=') {
                if (input.value.startsWith('. '))
                    input.value = input.value.replace('. ', '0 ');
                input.value = input.value.replaceAll(' .', ' 0.');

                if (input.value.includes('-')) {
                    input.value = input.value.replaceAll(' -', ' + -')
                    if (input.value.startsWith(' +'))
                        input.value = input.value.replace(' + ', '');

                    temp_ = input.value.split(' ');
                    for (let i = 0; i < temp_.length; i++)
                        if (temp_[i].includes('-'))
                            temp_[i] = '(' + temp_[i] + ')';

                    input.value = temp_.toString().replaceAll(',', ' ');
                }

                input.value = eval(input.value.replaceAll('^', '**').replaceAll('÷', '/').replaceAll('x', '*'));
                if (input.value.includes('e') || input.value.length > 6)
                    input.value = parseFloat(input.value).toExponential(4);
                else if (input.value.includes('.'))
                    input.value = parseFloat(input.value).toFixed(4);
            }
            else if (e.target.innerHTML === 'DEL') {
                if (input.value === 'Infinity' || input.value === 'NaN' || input.value === '-Infinity')
                    input.value = '';
                else {
                    if (input.value.endsWith(' '))
                        input.value = input.value.substring(0, input.value.length - 1);
                    if (input.value.endsWith('^'))
                        input.value = input.value.substring(0, input.value.length - 1);
                    input.value = input.value.substring(0, input.value.length - 1);
                    if (input.value === ' ')
                        input.value = '';
                }
            }
            else {
                if (e.target.innerHTML === '.') {
                    temp = input.value.split(' ');
                    let count = 0;
                    for (let i = 0; i < temp[temp.length - 1].length; i++) {
                        if (temp[temp.length - 1].charAt(i) === '.') {
                            count++;
                            break;
                        }
                    }
                    if (count === 0)
                        input.value += e.target.innerHTML;
                }
                else
                    input.value += e.target.innerHTML;
            }
        }
        else {
            if (e.target.innerHTML === '.') {
                temp = input.value.split(' ');
                let count = 0;
                for (let i = 0; i < temp[temp.length - 1].length; i++) {
                    if (temp[temp.length - 1].charAt(i) === '.') {
                        count++;
                        break;
                    }
                }
                if (count === 0)
                    input.value += e.target.innerHTML;
            }
            else if (!'% + x ÷ ^ AC DEL ='.includes(e.target.innerHTML)) {
                if (e.target.innerHTML === '-')
                    input.value += ' ' + e.target.innerHTML;
                else
                    input.value += e.target.innerHTML;
            }
        }
    })
})