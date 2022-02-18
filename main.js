var solution = {}
var column = 1
var row = 1
var symbols = ['+', '-', '*', '/']

jQuery(document).ready(function() {
    var generatedSum = generateSum()
    var ans = calculate(generatedSum)
    while (String(ans).includes('.') || String(ans).includes('-') || ans == Infinity || ans > 350) {
        generatedSum = generateSum()
        ans = calculate(generatedSum)   
    }
    String(generatedSum)
    generatedSum = generatedSum.replace(' ', '')
    generatedSum = generatedSum.replace(' ', '')
    generatedSum = generatedSum.replace(' ', '')
    generatedSum = generatedSum.replace(' ', '')
    solution = {
        sum: generatedSum,
        answer: String(ans)
    }
    console.log(solution)
    jQuery('#answer').text('The solution is ' + solution.answer)
})

function input(text) {
    console.log(`.r${row}c${column}`)
    jQuery(`.r${row}c${column}`).text(text)
    if (column == 7) {
         window.alert('Game over')
    } else {
        if (row < 7) {
            row += 1
        }
    }
}

function Delete() {
    jQuery(`.r${row - 1}c${column}`).text('')
    if (row > 1) {
        row -= 1
    }
}

function enter() {
    var sum = `${jQuery(`.r1c${column}`).text()}${jQuery(`.r2c${column}`).text()}${jQuery(`.r3c${column}`).text()}${jQuery(`.r4c${column}`).text()}${jQuery(`.r5c${column}`).text()}${jQuery(`.r6c${column}`).text()}`
    if (sum.length != 6) {
        window.alert('The sum requires 6 characters')
        console.log(sum)
    } else if (calculate_sum(sum)) {
        window.alert('The answer has to be ' + solution.answer)
        console.log(sum)
    } else {
        var chars = []
        for (i = 0; i < 6; i++) {
            chars.splice(chars.length, 0, sum[i])
        }
        console.log(chars)
        for (i = 0; i < 7; i++) {
            var char = chars[i]
            if (solution.sum.includes(char)) {
                if (char == '1') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#1`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#1`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '2') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#2`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#2`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '3') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#3`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#3`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '4') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#4`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#4`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '5') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#5`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#5`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '6') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#6`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#6`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '7') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#7`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#7`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '8') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#8`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#8`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '9') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#9`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#9`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '0') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#0`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#0`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '+') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#a`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#a`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '-') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#s`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#s`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '*') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#m`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#m`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                if (char == '/') {
                    if (i == solution.sum.indexOf(chars[i])) { 
                        jQuery(`#d`).css('background-color', 'lime')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'lime')
                    } else {
                        jQuery(`#d`).css('background-color', 'orange')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'orange')
                    }
                }
                
            } else {
                if (isNaN(Number(char))) {
                    if (char == '+') {
                        jQuery(`#a`).css('background-color', 'gray')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
                    } else if (char == '-') {
                        jQuery(`#s`).css('background-color', 'gray')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
                    } else if (char == '*') {
                        jQuery(`#m`).css('background-color', 'gray')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
                    } else if (char == '/') {
                        jQuery(`#d`).css('background-color', 'gray')
                        jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
                    }
                } else {
                    jQuery(`#${char}`).css('background-color', 'gray')
                    jQuery(`.r${i + 1}c${column}`).css('background-color', 'gray')
                }
            }
        }
        if (sum == solution.sum) {
            setTimeout(function() {
                window.alert('you win')
            }, 500)
        }
        column += 1 
        row = 1
    }
}

function calculate_sum(sum) {
    var characters = []
    var sum_main = ''
    for (i = 0; i < 7; i++) {
        characters.splice(characters.length, 0, sum[i])
    }
    for (i = 0; i < 6; i++) {
        if (isNaN(Number(characters[i]))) {
            sum_main += ' ' + characters[i] + ' '
        } else {
            sum_main += characters[i]
        }
    }
    if (calculate(sum_main) == solution.answer) {
        return false
    } else {
        return true
    }
}

function calculate(calculation) {
    var operands = []
        var operators = []
        var split_char = '';
        var cal_array = [];
        calculation += ' '
        for (i = 0; i < calculation.length; i++) {
            if (calculation[i] == ' ') {
                cal_array.push(split_char)
                split_char = ''
            } else {
                split_char = split_char + calculation[i]
            }
        }
        //divide characters into array
        while (cal_array.includes(')')) {
            var bracket_close_pos = cal_array.indexOf(')')
            var bracket_open_pos = 0
            var isbracket = false
            var subraction_int = 1
            var bracket_cal_array = []
            while (isbracket == false) {
                var operator = cal_array[bracket_close_pos - subraction_int]
                bracket_cal_array.splice(0, 0, operator)
                if (operator == '(') {
                    isbracket = true
                    bracket_open_pos = bracket_close_pos - subraction_int
                } else {
                    subraction_int += 1
                }
            }
            //extracting sum in brackets

            var bracket_cal = [];
            for (i = bracket_open_pos + 1; i < bracket_close_pos; i++) {
                bracket_cal.push(cal_array[i])
            }
            //calculate sum in brackets

            var operands = []
            var operators = []
            for (i = 0; i < bracket_cal.length; i++) {
                var char = bracket_cal[i]
                if (char == '+' || char == '-' || char == '*' || char == '/' || char == '%' || char == '(' || char == ')' || char == '^') {
                    operators.push(char)
                } else {
                    operands.push(char)
                }
            }
            //divide sum in brackets to operators and operands

            while (operators.length > 0) {
                if (operators.includes('/')) {
                    var operator_pos = operators.indexOf('/')
                    var number_one = operands[operator_pos]
                    var number_two = operands[operator_pos + 1]
                    var ans = Number(number_one) / Number(number_two)
                    operands.splice(operator_pos, 1, ans)
                    operands.splice(operator_pos + 1, 1)
                    operators.splice(operator_pos, 1)
                } else if (operators.includes('*')) {
                    var operator_pos = operators.indexOf('*')
                    var number_one = operands[operator_pos]
                    var number_two = operands[operator_pos + 1]
                    var ans = Number(number_one) * Number(number_two)
                    operands.splice(operator_pos, 1, ans)
                    operands.splice(operator_pos + 1, 1)
                    operators.splice(operator_pos, 1)
                } else if (operators.includes('-')) {
                    var operator_pos = operators.indexOf('-')
                    var number_one = operands[operator_pos]
                    var number_two = operands[operator_pos + 1]
                    var ans = Number(number_one) - Number(number_two)
                    operands.splice(operator_pos, 1, ans)
                    operands.splice(operator_pos + 1, 1)
                    operators.splice(operator_pos, 1)
                } else if (operators.includes('+')) {
                    var operator_pos = operators.indexOf('+')
                    var number_one = operands[operator_pos]
                    var number_two = operands[operator_pos + 1]
                    var ans = Number(number_one) + Number(number_two)
                    operands.splice(operator_pos, 1, ans)
                    operands.splice(operator_pos + 1, 1)
                    operators.splice(operator_pos, 1)
                }
            }
            //calculate sum in brackets

            console.log(operands, operators)

            for (i = 0; i < bracket_cal.length + 1; i++) {
                cal_array.splice(bracket_open_pos, 1)
            }

            cal_array.splice(bracket_open_pos, 1, operands[0])

            console.log(cal_array)
            //insert answer in calculation

        }

        var operands = []
        var operators = []
        for (i = 0; i < cal_array.length; i++) {
            var char = cal_array[i]
            if (char == '+' || char == '-' || char == '*' || char == '/' || char == '%' || char == '(' || char == ')' || char == '^') {
                operators.push(char)
            } else {
                operands.push(char)
            }
        }
        //divide sum without brackets into operators and operands

        while (operators.length > 0) {
            if (operators.includes('/')) {
                var operator_pos = operators.indexOf('/')
                var number_one = operands[operator_pos]
                var number_two = operands[operator_pos + 1]
                var ans = Number(number_one) / Number(number_two)
                operands.splice(operator_pos, 1, ans)
                operands.splice(operator_pos + 1, 1)
                operators.splice(operator_pos, 1)
            } else if (operators.includes('*')) {
                var operator_pos = operators.indexOf('*')
                var number_one = operands[operator_pos]
                var number_two = operands[operator_pos + 1]
                var ans = Number(number_one) * Number(number_two)
                operands.splice(operator_pos, 1, ans)
                operands.splice(operator_pos + 1, 1)
                operators.splice(operator_pos, 1)
            } else if (operators.includes('-')) {
                var operator_pos = operators.indexOf('-')
                var number_one = operands[operator_pos]
                var number_two = operands[operator_pos + 1]
                var ans = Number(number_one) - Number(number_two)
                operands.splice(operator_pos, 1, ans)
                operands.splice(operator_pos + 1, 1)
                operators.splice(operator_pos, 1)
            } else if (operators.includes('+')) {
                var operator_pos = operators.indexOf('+')
                var number_one = operands[operator_pos]
                var number_two = operands[operator_pos + 1]
                var ans = Number(number_one) + Number(number_two)
                operands.splice(operator_pos, 1, ans)
                operands.splice(operator_pos + 1, 1)
                operators.splice(operator_pos, 1)
            }
        }
        //calculate sum

        return (operands[0])
        //return answer
}

function generateSum() {
    var fn = Math.round(Math.random() * 8 + 1)
    var sn = Math.round(Math.random() * 8 + 1)
    var tn = Math.round(Math.random() * 8 + 1)
    var frn = Math.round(Math.random() * 8 + 1)
    var fsymbol = Math.round(Math.random() * 3)
    var ssymbol = Math.round(Math.random() * 3)
    while (fn == sn || fn == tn || fn == frn || sn == tn || sn == frn || tn == frn) {
        fn = Math.round(Math.random() * 8 + 1)
        sn = Math.round(Math.random() * 8 + 1)
        tn = Math.round(Math.random() * 8 + 1)
        frn = Math.round(Math.random() * 8 + 1)
    }
    while (fsymbol == ssymbol) {
        fsymbol = Math.round(Math.random() * 3)
        ssymbol = Math.round(Math.random() * 3)
    }
    var fsymbol = symbols[fsymbol]
    var ssymbol = symbols[ssymbol]
    sum = String(fn) + String(sn) + ' ' + fsymbol + ' ' + tn + ' ' + ssymbol + ' ' + frn
    return sum
}