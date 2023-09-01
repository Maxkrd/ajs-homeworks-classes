import Character from '../character';

test('Тест короткого имени', () => {
  function result() {
    return new Character('b', 'Bowman');
  }
  expect(result).toThrow('Неверное количество букв в имени!');
});

test('Тест длинного имени', () => {
  function result() {
    return new Character('asdfghjklmnbvcxz', 'Bowman');
  }
  expect(result).toThrow('Неверное количество букв в имени!');
});

test('Тест неверного типа', () => {
  function result() {
    return new Character('name', '1');
  }
  expect(result).toThrow('Тип героя должен быть: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
