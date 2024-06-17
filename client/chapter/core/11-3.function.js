/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식
let calcAllMoney = (...rest) => {
  let total = 0;

  // for 문
  // for(let i = 0; i < rest.length; i++){
  //   total += rest[i];
  // }

  // for...of 문
  // for(let value of rest){
  //   total += value;
  // }

  // forEach  => arrow function
  // rest.forEach(function(item){
  //   total += item;
  // })

  // rest.forEach(item => total += item)

  // reduce => arrow function

  // const result = rest.reduce(function(acc,cur){
  //   return acc + cur
  // },0)

  return rest.reduce((acc, cur) => acc + cur, 0);
};

const result = calcAllMoney(1000, 5000, 4500, 13000);

// console.log(result);

// 화살표 함수와 this

// 일반 함수
// - constructor 내장 (concise method는 예외)
// - this : 나를 호출한 대상을 this
// - 객체의 메서드로 사용이 많이 됨 => this를 찾기 위해

// 화살표 함수
// - constructor 비내장
// - this : 바인딩 하지 않음 -> 상위 컨텍스트에서 찾음.
// - 메서드 안의 함수를 작성해야 할 때 // 내 상위 this를 가져오기 때문에

const user = {
  name: '범쌤',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    function findthis() {
      console.log(this);
    }
    findthis();
  },
};


const user2 = {
  name: '범쌤',
  total: 0,
  grades: [30, 60, 80],
  totalGrades() {
    findthis()=>
      console.log(this)
    

  }
};



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
// let pow;

// pow = (numeric, powerCount) => {
//   let result = 1;
//   for (let i = 0; i < powerCount; i++) {
//     result *= numeric;
//   }
//   return result;
// };

const pow = (numeric, powerCount) => {
  return Array(powerCount)
    .fill(null)
    .reduce((acc) => {
      return (acc *= numeric);
    }, 1);
};
// array(20)을 하면 배열을 생성하긴 하는데 비어있는거고 즉 요소가 정의되지 않아서 reduce 메소드를 바로 사용할 수 없어서 fill(null)사용함

// const pow = (numeric,powerCount) => Array(powerCount).fill(null).reduce(acc => acc *= numeric,1)

// 위랑 같은 코드고 화살표 함수로 생략할 부분 생략함

// repeat(text: string, repeatCount: number): string;
// let repeat;

// repeat = (text, repeatCount) => {
//   let result = '';
//   for (let i = 0; i < repeatCount; i++) {
//     result += text;
//   }
//   return result;
// };

// repeat('안녕👋', 3);
