/* 
  Complete the following function that will return the difference in years (age) for a birthdate,
  and optionally a "now" date. Both arguments to the function are expected to be Date objects. 
  The returned difference can be either positive or negative.

  getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
  getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
  getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
  getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
 */

/**
 * Return the difference between a birthdate and an optional "now" date, in years
 *
 * @param {Date} birthDate
 * @param {Date} nowDate
 * @return  {Number}
 */

function getAge(birthDate, nowDate = new Date()) {
  const age = nowDate.getFullYear() - birthDate.getFullYear();
  const month = nowDate.getMonth();
  const day = nowDate.getDate();

  const isBirthdayPassed =
    month > birthDate.getMonth() ||
    (month === birthDate.getMonth() && day >= birthDate.getDate());

  return isBirthdayPassed ? age : age - 1;
}

const testCases = [
  [new Date("1976/11/19"), new Date("2013/01/01")], // 36
  [new Date("2013/01/01"), new Date("2014/01/01")], // 1
  [new Date("2014/01/01"), new Date("2013/01/01")], // -1
  [new Date("2013/01/01"), new Date("2013/01/01")], // 0
  [new Date("2008/02/29"), new Date("2032/03/01")], // 24
  [new Date("2008/02/29"), new Date("2009/02/28")], // 0
];

testCases.forEach((testCase) => {
  const formatter = new Intl.DateTimeFormat("ru-RU");
  const birthDateForm = formatter.format(testCase[0]);
  const nowDateForm = formatter.format(testCase[1]);

  const result = getAge(testCase[0], testCase[1]);
  console.log(
    `Birth date: ${birthDateForm}. Now date: ${nowDateForm}. Ages passed: ${result}`,
  );
});
