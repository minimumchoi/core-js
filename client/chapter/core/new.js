function User(name, address, age) {
  this.name = name;
  this.address = address;
  this.age = age;

  this.sayHi = function () {
    return `안녕 ? 난 ${this.name} 이야 만나서 반가워~!`;
  };
}

const person1 = new User('심', '서울시 중랑구', 40);
const person2 = new User('beom', '서울시 ', 35);
const person3 = new User('tiger', '서울시', 30);
const person4 = new User('kindtiger', '서울시 중랑구', 10);
const person5 = new User('이아영', '서울시 중랑구', 25);

//
//

function first() {
  let x = 10;

  function second(num) {
    let y = 20;

    x = num;

    return x + y;
  }
  return second;
}

// first()를 실행하면 second의 본문이 나옴
// const result = first();로 실행하면 second함수 본문이 나옴
// first()() 커링펑션으로 second함수 매개변수 num에 접근가능
// const result = first();로 받아서 result()로 num에 접근함 => 바깥변수가 함수안에 접근했다!
// 참고가 끊기면 가비지 컬렉션의 수집대상이 되는데 이너함수가 바깥함수를 참조하고 있으므로 가비지 컬렉션의 수집대상이 되지 못함
