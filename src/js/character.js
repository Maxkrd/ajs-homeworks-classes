export default class Character {
  constructor(name, type) {
    const typeArr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name === 'string' && name.length > 2 && name.length < 10) {
      this.name = name;
    } else {
      throw new Error('Неверное количество букв в имени!');
    }
    if (typeArr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Неверный тип героя!');
    }
    this.health = 100;
    this.level = 1;
  }
}
