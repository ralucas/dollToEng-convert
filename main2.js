/**
Write some code that will accept an amount and convert it to the appropriate
string representation.
Example: Convert 2523.04
to "Two thousand five hundred twenty-three and 04/100 dollars"
**/

var numbers = {
    0 : "zero",
    1 : "one",
    2 : "two",
    3 : "three",
    4 : "four",
    5 : "five",
    6 : "six",
    7 : "seven",
    8 : "eight",
    9 : "nine",
    10 : "ten",
    11 : "eleven",
    12 : "twelve",
    13 : "thirteen",
    14 : "fourteen",
    15 : "fifteen",
    16 : "sixteen",
    17 : "seventeen",
    18 : "eighteen",
    19 : "nineteen",
    20 : "twenty",
    30 : "thirty",
    40 : "forty",
    50 : "fifty",
    60 : "sixty",
    70 : "seventy",
    80 : "eighty",
    90 : "ninety"
};

var endings = {
    0 : " ",
    1 : " ",
    2 : " ",
    3 : " hundred ",
    4 : " thousand ",
    5 : " thousand ",
    6 : " hundred ",
    7 : " million ",
    8 : " million ",
    9 : " hundred ",
    10 : " billion "
}

var converter = (function(){

    var toEnglish = function(num){
        if(parseInt(num) < 20){
            return numbers[parseInt(num)];
        }
        else if(num.substring(1,2) === '0'){
            return numbers[num];
        }
        else{
            var numStr = numbers[num.substring(0,1)+'0']
            +'-'+numbers[num.substring(1,2)];
            return numStr;
        }
    };

    var change = function(input){
        var amountArr = input.toString().split('.');
        var cents = '';
        if(amountArr[1] === undefined){
            cents = 'and 00/100 dollars'
        }
        else{
            cents = 'and '+amountArr[1]+'/100 dollars';
        }
        return cents;
    };

    var cash = function (input){
        var amountArr = input.toString().split('.');
        var dollars = amountArr[0];
        var numArr = [];
        var wordsArr = [];
        var x;
        var y;
        var z;
        var splitNum = dollars.toString().split('');
        var len = splitNum.length;
        var lenArr = [];

        for(var i = len; i > 0; i--){
            y = len - i;
            z = y + 1;
            if(endings[i+1] === " hundred "){
                z = y + 2;
                i--;
            }
            lenArr.push(endings[i]);
            numArr.push(dollars.toString().substring(y,z));
        }
        for(var j = 0; j < numArr.length; j++){
            var words = toEnglish(numArr[j]);
            if(numArr[j+1] === "00" && numArr[j+2]){
                if(!words.match(/zero/)){
                    wordsArr.push(words + lenArr[j] + lenArr[j+1]);
                }
            }
            else if(!words.match(/zero/)){
                wordsArr.push(words + lenArr[j]);
            }
        }
        var sent = wordsArr.join('');
        var newSent = sent.replace(/\s+/g, " ");
        return newSent;
    };

    var total = function(f, f2){
        return f + f2;
    };

    return {
        toEnglish : toEnglish,
        change : change,
        cash : cash,
        total : total
    };

})();