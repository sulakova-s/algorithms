/* 
    Костя подключен к мобильному оператору «Мобайл». 

    Абонентская плата Кости составляет A рублей в месяц. За эту стоимость Костя получает
    B мегабайт интернет-трафика. Если Костя выйдет за лимит трафика, то каждый следующий 
    мегабайт будет стоить ему C рублей.

    Костя планирует потратить D мегабайт интернет-трафика в следующий месяц. Помогите ему
     сосчитать, во сколько рублей ему обойдется интернет.
*/

function countMobileBoard(A, B, C, D) {
  if (D <= B) return A;
  return A + C * (D - B);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let results = [];

rl.on("line", (line) => {
  const [A, B, C, D] = line.trim().split(/\s+/).map(Number);
  results.push(countMobileBoard(A, B, C, D));
});

process.stdin.on("end", () => {
  console.log(results.join("\n"));
  process.exit(0);
});
