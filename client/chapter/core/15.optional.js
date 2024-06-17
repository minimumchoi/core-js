/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */

const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q',
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.
portableFan && portableFan.photos && portableFan.photos.animate;

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

portableFan.photos?.animate;

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

const fullName = portableFan.getFullName();

console.log(fullName);
// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

// 동기 비동기

console.log(1);
console.log(2);
setTimeout(function () {
  //윈도우 객체이자 API
  console.log(3);
}, 1000);
console.log(4);
console.log(5);

const button = document.querySelector('.my-button');

const id = setTimeout(() => {
  const template = /* html */ `
    <button type="button" class="my-button">my-button</button>
  `;

  document.body.insertAdjacentHTML('beforeend', template);
}, 1000);

// clearTimeout(id)

button?.addEventListener('click', () => {
  console.log('clicked~!');
});

// 연산 오래 걸리는 작업

// const id2 = setInterval(() => {
//   console.log('hi~!');
// }, 1000);

// clearInterval()
// clearTimeout()
// 둘다 똑같이 작동함

// 애니메이션 효과를 줄수도 있음 레거시 코드라 이걸로 애니메이션 주진 않음
let count = 0;

const id2 = setInterval(() => {
  console.log(++count);

  document.querySelector('.first').style.transform =
    `translateY(${count}px) rotate(${count}deg)`;

  if (count >= 500) {
    clearInterval(id2);
  }
}, 10);

// 위코드랑 똑같이 동작하지만 requestAnimationFrame를 사용해서
// let counter = 0;

// function animation() {
//   console.log(++counter);

//   const id = requestAnimationFrame(animation);

//   if (counter >= 100) {
//     cancelAnimationFrame(id);
//   }
// }

// animation();
