var inputNumbers = [];

function enterNumbers() {
    document.body.style.backgroundImage = "url('image2.webp')";
  var numElements = parseInt(document.getElementById("numElements").value);
  var inputDiv = document.getElementById("inputNumbers");
  inputDiv.style.display = "none";

  var resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";

  inputNumbers = []; 

  for (var i = 0; i < numElements; i++) {
    var inputField = document.createElement("input");
    inputField.type = "number";
    inputField.placeholder = "Enter " + (i + 1) +"'s amount";
    inputField.style.marginBottom = "10px";
    inputNumbers.push(inputField);
    resultDiv.insertBefore(inputField, resultDiv.childNodes[resultDiv.childNodes.length - 2]);
  }
}

function calculate() {
document.body.style.backgroundImage = "url('image3.webp')";
  var is200Present = document.getElementById("is200Present").value;
  var resultDiv = document.getElementById("result");
  resultDiv.style.display = "none";

  var outputDiv = document.getElementById("output");
  outputDiv.style.display = "block";

  var numbers = inputNumbers.map(function(inputField) {
    return parseInt(inputField.value);
  });
  var sum = 0;
  var fiveHundreds = 0;
  var oneHundreds = 0;
  var twoHundreds = 0;
  var fifties = 0;
  var twenties = 0;
  var tens = 0;
  var fives = 0;
  var twos = 0;
  var ones = 0;

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  if (is200Present === 'yes') {
    for (var i = 0; i < numbers.length; i++) {
      while (numbers[i] >= 500) {
        fiveHundreds++;
        numbers[i] -= 500;
      }
      while (numbers[i] >= 200) {
        twoHundreds++;
        numbers[i] -= 200;
      }
      while (numbers[i] >= 100) {
        oneHundreds++;
        numbers[i] -= 100;
      }
      while (numbers[i] >= 50) {
        fifties++;
        numbers[i] -= 50;
      }
      while (numbers[i] >= 20) {
        twenties++;
        numbers[i] -= 20;
      }
      while (numbers[i] >= 10) {
        tens++;
        numbers[i] -= 10;
      }
      while (numbers[i] >= 5) {
        fives++;
        numbers[i] -= 5;
      }
      while (numbers[i] >= 2) {
        twos++;
        numbers[i] -= 2;
      }
      while (numbers[i] == 1) {
        ones++;
        numbers[i] -= 1;
      }
    }
  } else {
    for (var i = 0; i < numbers.length; i++) {
      while (numbers[i] >= 500) {
        fiveHundreds++;
        numbers[i] -= 500;
      }
      while (numbers[i] >= 100) {
        oneHundreds++;
        numbers[i] -= 100;
      }
      while (numbers[i] >= 50) {
        fifties++;
        numbers[i] -= 50;
      }
      while (numbers[i] >= 20) {
        twenties++;
        numbers[i] -= 20;
      }
      while (numbers[i] >= 10) {
        tens++;
        numbers[i] -= 10;
      }
      while (numbers[i] >= 5) {
        fives++;
        numbers[i] -= 5;
      }
      while (numbers[i] >= 2) {
        twos++;
        numbers[i] -= 2;
      }
      while (numbers[i] == 1) {
        ones++;
        numbers[i] -= 1;
      }
    }
  }

  var outputContent = document.getElementById("outputContent");
  outputContent.innerHTML = `
    <p>Numbers entered: ${inputNumbers.map(function(inputField) {
      return inputField.value;
    }).join(', ')}</p>
    <p>No. of five hundreds 500s: ${fiveHundreds}</p>
    <p>No. of two hundreds 200s: ${twoHundreds}</p>
    <p>No. of one hundreds 100s: ${oneHundreds}</p>
    <p>No. of fifties 50s: ${fifties}</p>
    <p>No. of twenties 20s: ${twenties}</p>
    <p>No. of tens 10s: ${tens}</p>
    <p>No. of fives 5s: ${fives}</p>
    <p>No. of twos 2s: ${twos}</p>
    <p>No. of ones 1s: ${ones}</p>
    <p>Total amount: ${sum}</p>
  `;
}
