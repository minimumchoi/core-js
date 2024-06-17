/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

// function isArray(data) {
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';
// }
// Object는 toString라는 문자를 반환하는 기능이 있음 근데 Object꺼임 배열도 toString도 있지만 타입체크가 아니라 문자로만 반환해줌
// 그래서  call을 써서 빌림 call(data) data가 어떤 자료형인지 알려줌 [object Object]이런식으로 알려줘서 자료형 뺴고 앞뒤로 slice통해 다잘라줌
// 첫글자 대문자인거 바꿔주기 위해  toLowerCase사용 'array'이거는 배열인지 확인해주는것!

// 화살표 함수
// const isArray = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === 'array';

// isArray();

// 타입체크하는 유틸 함수
// const typeOf = (data) =>
//   Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

// const isArray = (data) => typeOf(data) === 'array';
// const isNull = (data) => typeOf(data) === 'null';
// const isNumber = (data) => typeOf(data) === 'number';

const people = [
  {
    id: 0,
    name: '안재명',
    age: 25,
    job: '물음표살인마',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/50.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 1,
    name: '황선우',
    age: 51,
    job: '요식업 사장님',
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/65.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 2,
    name: '유진',
    job: '디스코드 봇',
    age: 12,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/75.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
  {
    id: 3,
    name: '김한울',
    job: '비둘기',
    age: 39,
    imgSrc: 'https://randomuser.me/api/portraits/thumb/men/78.jpg',
    imgAlt: '대체 텍스트입니다.',
  },
];

const span = document.querySelectorAll('span'); //유사배열
span.forEach((tag) => {
  tag.addEventListener('click', function () {
    this.style.color = 'dodgerblue';
  });
});

// const first = document.querySelector('.first');
// const second = document.querySelector('.second');
// const third = document.querySelector('.third');

// first.addEventListener('click', () => {
//   console.log('first를 클릭하셨습니다');
// });

// second.addEventListener('click', () => {
//   console.log('second를 클릭하셨습니다');
// });

// third.addEventListener('click', () => {
//   console.log('third를 클릭하셨습니다');
// });

/* 요소 순환 ---------------------------- */

// forEach

people.forEach(function (user) {
  console.log(user.job);
});

/* 원형 파괴 ----------------------------- */

// push
// people.push('admin');

// pop
// people.pop('admin');

// unshift
// shift
// reverse
// people.reverse();

// 복사해서 리버스
const arr = [...people];
arr.reverse();

// splice
// people.splice(0, 2, '안녕');

// sort
function compare({ age: a }, { age: b }) {
  if (a > b) return 1; // 첫 번째 값이 두 번째 값보다 큰 경우
  if (a == b) return 0; // 두 값이 같은 경우
  if (a < b) return -1; // 첫 번째 값이 두 번째 값보다 작은 경우
}

// people.sort(compare);

/* 새로운 배열 반환 ------------------------ */

// concat
// tospliced
const toSpliced = people.toSpliced(0, 2, '안녕');
// toSorted
const toSorted = people.toSorted(compare);
// toReversed
const toReversed = people.toReversed(); // 알아서 복사해서 만들어주는 메서드
// toSpliced
// map
// const nameList = people.map(function (user) {
//   return user.name;
// });

const nameList = people.map((u) => u.name);

// 현재 나이에 +2 반환
// const age = people.map((user)=>{
//   return user.age + 2
// })

// const nameTag = people.map((user) => {
//   let template = `
//   <li>이름 : ${user.name}</li>
//   `;
//   return template;
// });

//위랑 똑같은 코드인데 구조 분해 할당으로 name을 받아줌. 어차피 name만 받아주니깐
// const nameTag = people.map(({name})=>{
//   let template = `
//      <li> 이름 : ${name} </li>
//   `
//   return template
// })

// nameTag.forEach((tag) => {
//   document.querySelector('ul').insertAdjacentHTML('beforeend', tag);
// });

// 위에꺼 심화 예제?
const cardTag = people.map(({ name, age, job, imgSrc, imgAlt }) => {
  let template = /* html */ `
    <li class="userCard">
      <div class="imageField">
        <img src="${imgSrc}.jpg" alt="${imgAlt}" />
      </div>
      <ul class="contents">
        <li> <span class="strong">이름</span> : ${name}</li>
        <li> <span class="strong">나이</span> : ${age}</li>
        <li> <span class="strong">직업</span> : ${job}</li>
      </ul>
    </li>
  `;
  return template;
});

const ul = document.querySelector('ul');

cardTag.forEach((tag) => ul.insertAdjacentHTML('beforeend', tag));

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
const 황 = people.find((item) => {
  return item.name === '황선우';
});
// findIndex

/* 요소 걸러내기 --------------------------- */

// filter
// 배열로 반환해줌

const filter = people.filter((item) => {
  return item.age > 20;
});
// console.log(...filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// 모든 유저나이 더하기 초기값을 안더해주면 첫번째 안재명님의 객체가 tostring된 값이랑 숫자랑 접합 일어남
const reduce = people.reduce((acc, cur) => acc + cur.age, 0);

const template = people.reduce((acc, cur) => {
  return acc + `<li class="userCard"> ${cur.name} : ${cur.age} </li>`;
}, '');

ul.insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '유진 정민 현주 재명';
// split 문자 => 배열
const stringToArray = str.split(' ');
console.log(stringToArray);

// join
const arrayToString = stringToArray.join('-');
console.log(arrayToString);

// forEach map filter reduce 함수 직접만들기

const products = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 15000, brand: '오뚜기' },
  { name: '냉동 치킨 너겟', price: 12000, brand: '하림' },
  { name: '냉동 감자튀김', price: 8000, brand: '맥케인' },
  { name: '냉동 새우', price: 18000, brand: '곰곰' },
];

const forEach = (f, i) => {
  for (const a of i) f(a);
};

forEach(
  (item) => {
    console.log(item);
  },
  [1, 2, 3]
);

const map = (f, i) => {
  let result = [];

  for (const a of i) {
    result.push(f(a));
  }

  return result;
};

const _filter = (f, i) => {
  let result = [];

  for (const a of i) {
    if (f(a)) result.push(a);
  }
  return result;
};

_filter((n) => n > 3, [1, 2, 3, 4, 5]);

const _reduce = (f, acc, i) => {
  if (!i) {
    i = acc;
    acc = i.shift();
    // i = acc[Symbol.iterator]();
    // acc = i.next().value
  }

  for (const a of i) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;

console.log(_reduce((t, p) => t + p.price, 0, products));

console.log(
  _reduce(
    add,
    map(
      (p) => p.price,
      _filter((p) => p.price < 10000, products)
    )
  )
);
