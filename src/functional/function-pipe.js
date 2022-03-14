import { pipe } from 'lodash/fp';

let input = "   JavaScript   ";
let output = "<div>" + input.trim() + "</div>";

const trim = str => str.trim();
const lowerCase = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;
//trim
//lower-case
//wrapInDiv

const result = wrapInDiv(trim(lowerCase(input)));
console.log('Result', result);

//pipe() creates a pipe of functions from left to right
let transform = pipe(trim, lowerCase, wrapInDiv);

const newResult = transform(input);
console.log('New Result', newResult);