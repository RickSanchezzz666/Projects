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

for(let num = 0; num < charachters.length; num += 1) {
  charachtersSpeeches[num] = '';
}

results_2.forEach(texts => {
  let result = texts.match(/^[a-z]+:/gmi);
  let notArray = result[0]
  let resSlice = notArray.slice(0, -1);

  if(resSlice === charachters[0]) {
    const textSlice = texts.slice(charachters[0].length + 2)
    charachtersSpeeches[0] += textSlice;
    charachtersSpeeches[0] += ' \n';
  }
  if(resSlice === charachters[1]) {
    const textSlice = texts.slice(charachters[1].length + 2)
    charachtersSpeeches[1] += textSlice;
    charachtersSpeeches[1] += ' \n';
  }
  if(resSlice === charachters[2]) {
    const textSlice = texts.slice(charachters[2].length + 2)
    charachtersSpeeches[2] += textSlice;
    charachtersSpeeches[2] += ' \n';
  }
  if(resSlice === charachters[3]) {
    const textSlice = texts.slice(charachters[3].length + 2)
    charachtersSpeeches[3] += textSlice;
    charachtersSpeeches[3] += ' \n';
  }
})

console.log(charachters);

for(let num = 0; num < charachters.length; num += 1) {
  fs.writeFileSync(`${charachters[num]}.txt`, charachtersSpeeches[num])
}