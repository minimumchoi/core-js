class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    (this.tail = true), (this.stomach = []);
  }
  get eat() {
    return this.stomach;
  }
  set eat(food) {
    this.stomach.push(food);
  }
}

const a = new Animal('포동이');

console.log(a);

class Tiger extends Animal {
  constructor(name) {
    super(name);
    this.pattern = '호랑이무늬';
  }
  static bark(sound) {
    return sound + '🐯';
  }
  hunt(target) {
    return `${target}에게 조용히 접근한다.`;
  }
}

const 호랑이 = new Tiger('호돌이');
