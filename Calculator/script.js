const PI = eval(Math.PI);
const E = eval(Math.E);
let exp = '';
let rad = '';
let temp = '';
let display = document.getElementById('display');
let answer = document.getElementById('answer');
let buttons = Array.from(document.querySelectorAll('button'));

let standard = document.getElementById('standard-mode');
let scientific = document.getElementById('scientific-mode');
let simple_btn = document.getElementById('simple-btn');
let scienific_btn = document.getElementById('scienific-btn');
nav_title = document.getElementById('nav-title');

let info = document.getElementById('info');

standard.addEventListener('click', (e) => {
    simple_btn.style.display = "flex";
    scienific_btn.style.display = "none";
    nav_title.innerText = " Standard";
    closeNav();
})
scientific.addEventListener('click', (e) => {
    simple_btn.style.display = "none";
    scienific_btn.style.display = "flex";
    nav_title.innerText = " Scientific";
    closeNav();
})

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '%':
                display.value += '%';
                exp += '%';
                break;
            case 'C':
                display.value = '';
                answer.value = 'Ans';
                exp = '';
                check();
                break;
            case 'backspace':
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                if (exp) {
                    exp = exp.slice(0, -1);
                }
                check();
                break;
            case '(':
                exp += '(';
                display.value += '(';
                break;
            case ')':
                exp += ')';
                display.value += ')';
                break;
            case 'x2':
                exp = eval(exp) * eval(exp);
                answer.value = exp;
                display.value += '^2';
                break;
            case '√x':
                display.value = '√(' + display.value + ')';
                exp = eval(Math.sqrt(exp));
                answer.value = exp;
                break;
            case '÷':
                display.value += '/';
                exp += '/';
                break;
            case '7':
                display.value += '7';
                exp += '7';
                break;
            case '8':
                display.value += '8';
                exp += '8';
                break;
            case '9':
                display.value += '9';
                exp += '9';
                break;
            case 'x':
                display.value += 'x';
                exp += '*';
                break;
            case '4':
                display.value += '4';
                exp += '4';
                break;
            case '5':
                display.value += '5';
                exp += '5';
                break;
            case '6':
                display.value += '6';
                exp += '6';
                break;
            case '-':
                display.value += '-';
                exp += '-';
                break;
            case '1':
                display.value += '1';
                exp += '1';
                break;
            case '2':
                display.value += '2';
                exp += '2';
                break;
            case '3':
                display.value += '3';
                exp += '3';
                break;
            case '+':
                display.value += '+';
                exp += '+';
                break;
            case '+/-':
                display.value += '-';
                exp += '-';
                break;
            case '0':
                display.value += '0';
                exp += '0';
                break;
            case '.':
                display.value += '.';
                exp += '.';
                break;
            case '^':
                display.value += '^';
                temp = exp;
                exp = '';
                break;
            case '10x':
                display.value = '10^(' + display.value + ')';
                exp = eval(10 ** exp);
                answer.value = exp;
                break;
            case '|x|':
                display.value = '|' + exp + '|';
                exp = Math.abs(exp);
                answer.value = exp;
                break;
            case 'sin':
                display.value = 'sin(' + exp + ')';
                check();
                rad = Math.sin(exp);
                exp = Math.sin(exp * (Math.PI / 180)).toFixed(5);
                answer.value = exp;
                break;
            case 'cos':
                display.value = 'cos(' + exp + ')';
                check();
                rad = Math.sin(exp);
                exp = Math.cos(exp * (Math.PI / 180)).toFixed(5);
                answer.value = exp;
                break;
            case 'tan':
                display.value = 'tan(' + exp + ')';
                check();
                rad = Math.sin(exp);
                exp = Math.tan(exp * (Math.PI / 180)).toFixed(5);
                answer.value = exp;
                break;
            case 'π':
                display.value += 'π';
                exp += 'PI';
                break;
            case 'e':
                display.value += 'e';
                exp += E;
                break;
            case 'x!':
                caclFactorial();
                display.value = exp + '!';
                exp = answer.value;
                break;
            case 'log':
                display.value = 'log(' + exp + ')';
                exp = eval(Math.log10(exp));
                answer.value = exp;
                break;
            case 'ln':
                display.value = 'ln(' + exp + ')';
                exp = eval(Math.log(exp));
                answer.value = exp;
                break;
            case '=':
                try {
                    if (display.value.includes("^") == true) {
                        calcPower();
                        answer.value = eval(exp);
                    } else {
                        answer.value = eval(exp);
                    }
                } catch (error) {
                    answer.value = 'ERROR! Please Clear'
                }
                break;
        }
    })
})

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function calcPower() {
    exp = eval(temp ** exp);
}

function caclFactorial() {
    var fact = 1;
    exp = Number(exp);
    if (exp < 0) {
        answer.value = 'Undefined!';
    }
    else if (exp === 0) {
        answer.value = '1';
    }
    else {
        for (var i = exp; i > 0; i--) {
            fact *= i;
        }
        if (fact === Infinity) {
            answer.value = 'Out Of Range!'
        }
        else {
            answer.value = fact;
        }
    }
}

function check() {
    if (display.value.includes("sin") || display.value.includes("cos") || display.value.includes("tan")) {
        info.style.display = "block";
    }
    else {
        info.style.display = "none";
    }
}

function infoMessage() {
    if (info.innerHTML === "Rad") {
        answer.value = exp;
        info.innerHTML = "Deg";
    } else {
        answer.value = rad;
        info.innerHTML = "Rad";
    }
}