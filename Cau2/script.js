// Câu 2: Tạo một đối tượng mô tả một nhân vật trong một vũ trụ giả tưởng(chẳng hạn là một nhân vật phim hoặc game).
//Đối tượng này bao gồm các thuộc tính như name, age, role, và planet.
//Sử dụng destructuring(phép gán từ object) để lấy thông tin và in ra với định dạng.

// Đối tượng mô tả nhân vật
const character = {
    name: 'Zara',
    age: 32,
    role: 'Warrior',
    planet: 'Xylon',
    weapon: 'Laser Sword',
    strength: 95
};

//Destructuring
const { name, age, role, planet, weapon, strength } = character;
console.log('Name: ', name);
console.log('Age: ', age);
console.log('Role: ', role);
console.log('Planet: ', planet);
console.log('Weapon: ', weapon);
console.log('Strength', strength);

