/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

console.log(stringTotalLength);

// 특정 인덱스의 글자 추출
let extractCharacter = message[5];

console.log('extractCharacter : ', extractCharacter);

// enumerable // 열거 가능한
// iterable // 반복 가능한
// immutable // 불변의
// mutable // 변경 가능한
// mutant // 돌연변이

// const a = {...immutable}

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'P' + message.slice(1);

console.log(message);

// 부분 문자열 추출
let slice = message.slice(4, -1);
console.log('slice : ', slice);

let subString = message.substring(2, 5);
console.log('subString : ', subString);

// let subStr = message.substr();

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log('indexOf : ', indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edg') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1 && !!window.chrome:
      browserName = 'Chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'Firefox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
    default:
      browserName = '무슨 브라우저 쓰세요..?';
  }

  return browserName;
}

checkBrowser(); // chrome

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ', lastIndexOf);

let includes = message.includes('Less');
console.log('includes : ', includes);

let startsWith = message.startsWith('less');
console.log('startsWith : ', startsWith);

let endsWith = message.endsWith('more.');
console.log('endsWith : ', endsWith);

let str = '     a    b    c                 d         ';

// 공백 잘라내기
let trimStart = str.trimStart();
console.log('trimStart : ', trimStart);

let trimEnd = str.trimEnd();
console.log('trimEnd : ', trimEnd);

let trim = str.trim();
console.log('trim : ', trim);

const replaceAll = str.replaceAll(' ', ''); //좌변의 값을 찾아서 우변의 값으로 변경!
console.log('replaceAll : ', replaceAll);

const replace = str.replace(/\s*/g, '');
console.log('replace : ', replace);

// function trimText(string) {
//   return string.replace(/\s*/g, '');
// }
// trimText(str);

// 화살표 함수
const trimText = (string) => string.replace(/\s*/g, '');

trimText(str);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ', repeat);

// 대소문자 변환
let toLowerCase = message.toLocaleLowerCase();
console.log(toLowerCase);
let toUpperCase = message.toLocaleUpperCase();
console.log(toUpperCase);

console.clear();
// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(
    /(\s|-|_)+./g,
    (
      $1 // \s공백 - 하이픈 _언더스코어 .은 그 다음글자 말하는거 replace뒤에는 콜백함수 올수있음 매개변수로는 앞에서 걸러진게 들어온다
    ) =>
      $1
        .trim() //혹시 남아있는 공백없애기
        .replace(/(-|_)+/, '') //하이픈과 언더스코어 빈문자로 변경
        .toUpperCase() //대문자로 바꿔줘라
  );
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}
