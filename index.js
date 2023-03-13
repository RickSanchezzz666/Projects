const { text } = require('body-parser');
const fs = require('fs')

const scenario = fs.readFileSync('./scenario.txt', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
})
const resultNames = scenario.toString();
const results_1 = resultNames.match(/^[a-z]+:/gmi);

const resultText = scenario.toString();
const results_2 = resultText.match(/[a-z]+.+[?,;.:!]/gmi);

const charachters = [];
const charachtersSpeeches = [];
results_1.forEach(characterName => {
 const name = characterName.slice(0, -1)
    if (!charachters.includes(name)) {
      charachters.push(name);
    }
})

let charachtersSpeeches0 = '';
let charachtersSpeeches1 = '';
let charachtersSpeeches2 = '';
let charachtersSpeeches3 = '';

results_2.forEach(texts => {
  let result = texts.match(/^[a-z]+:/gmi);
  let notArray = result[0]
  let resSlice = notArray.slice(0, -1);

  if(resSlice === `Max`) {
    charachtersSpeeches0 += texts;
    charachtersSpeeches0 += ' \n';
  }
  if(resSlice === 'Geralt') {
    charachtersSpeeches1 += texts;
    charachtersSpeeches1 += ' \n';
  }
  if(resSlice === 'Yennefer') {
    charachtersSpeeches2 += texts;
    charachtersSpeeches2 += ' \n';
  }
  if(resSlice === 'Triss') {
    charachtersSpeeches3 += texts;
    charachtersSpeeches3 += ' \n';
  }
})

charachtersSpeeches.push(charachtersSpeeches0);
charachtersSpeeches.push(charachtersSpeeches1);
charachtersSpeeches.push(charachtersSpeeches2);
charachtersSpeeches.push(charachtersSpeeches3);

console.log(charachters);

for(let num = 0; num < charachters.length; num += 1) {
  if(num === 0) {
    fs.writeFileSync(`${charachters[num]}.txt`, charachtersSpeeches[num])
  }
  if(num === 1) {
    fs.writeFileSync(`${charachters[num]}.txt`, charachtersSpeeches[num])
  }
  if(num === 2) {
    fs.writeFileSync(`${charachters[num]}.txt`, charachtersSpeeches[num])
  }
  if(num === 3) {
    fs.writeFileSync(`${charachters[num]}.txt`, charachtersSpeeches[num])
  }
}