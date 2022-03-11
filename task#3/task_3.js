let first_digit,second_digit,third_digit;
let possible_digits = [0,1,2,3,4,5,6,7,8,9];
let knowledge = []
let first_digit_possible = []
let second_digit_possible = []
let third_digit_possible = []
// console.log(possible_digits);

let can_in = (digit,pos) => {
    knowledge.push(digit+' in '+pos);
    switch (pos) {
        case 0:
            first_digit_possible.push(digit)
            break;
        case 1:
            second_digit_possible.push(digit)
            break;
        case 2:
            third_digit_possible.push(digit)
            break;
    }
}

let not_in = (digit,pos) => {
    knowledge.push(digit+' not in '+pos);
    switch (pos) {
        case 0:
            if(digit in first_digit_possible){
                first_digit_possible.splice(first_digit_possible.indexOf(digit),1)
            }
            break;
        case 1:
            if(digit in second_digit_possible){
                second_digit_possible.splice(second_digit_possible.indexOf(digit),1)
            }
            break;
        case 2:
            if(digit in third_digit_possible){
                third_digit_possible.splice(third_digit_possible.indexOf(digit),1)
            }
            break;
    }
}

let wrong = (arr) => {
    arr.forEach(element => {
        possible_digits.forEach((pElement,index) => {
            if(element == pElement){
                possible_digits.splice(index,1);
            }
        });
    });
}

// try to define predicate logics for knowledge representation.
let rules = {
    "682 - one digit right and in right place" : [can_in(6,0),can_in(8,1),can_in(2,2)],
    "614 - one digit right but in wrong place" : [not_in(6,0),not_in(1,1),not_in(4,2)],
    "206 - two digits right but in wrong place" : [not_in(2,0),not_in(0,1),not_in(6,2)],
    "738 - all digits wrong" : [wrong([7,3,8])],
    "380 - one digit right but in wrong place" : [not_in(3,0),not_in(8,1),not_in(0,2)]
}

// extract knowledge from rules
for (const key in rules) {
    if (Object.hasOwnProperty.call(rules, key)) {
        const element = rules[key];
        element.forEach(e => {
            e;
        });
    }
}

console.log("knowledge extracted: ",knowledge);
console.log("possible digits extracted: ",possible_digits);
console.log("possible digits at first place: ",first_digit_possible);
console.log("possible digits at second place: ",second_digit_possible);
console.log("possible digits at third place: ",third_digit_possible);
// possible_digits.forEach(element => {
    
// });