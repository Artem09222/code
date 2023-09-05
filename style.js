// ex 1 
const userObj = {
    user1: { name: 'Іван', age: 25 },
    user2: { name: 'Марія', age: 30 },
    user3: { name: 'Петро', age: 35 },
  };
  
  const names = Object.values(userObj).map(user => user.name);
  
  console.log(names);
// ex 2 
const user = [
    { name: 'Іван', eye: 'green' },
    { name: 'Марія', eye: 'brown' },
    { name: 'Петро', eye: 'blue' },
    { name: 'Artem', eye: 'brown' }
]

function getUsersByEyeColor(usersArray, eyeColor) {
    return usersArray.filter(user => user.eye === eyeColor);
  }
  const brownEye = getUsersByEyeColor(user, 'brown');
  
  console.log(brownEye);
// ex 3
const users = [
    { name: 'Іван', gender: 'чоловік' },
    { name: 'Марія', gender: 'жінка' },
    { name: 'Петро', gender: 'чоловік' },
    { name: 'Оля', gender: 'жінка' },
  ];

  function getUsersByGender(usersArray, gender) {
    return usersArray.filter(user => user.gender === gender).map(user => user.name);
  }
  
  const womenNames = getUsersByGender(users, 'жінка');
  
  console.log(womenNames);
// ex 4
const name = [
    { name: 'Іван', isActive: true },
    { name: 'Марія', isActive: false },
    { name: 'Оля', isActive: true },
    { name: 'Петро', isActive: false },
]

const passiveUsers = name.filter(user => !user.isActive);

console.log(passiveUsers);
// ex 5
const emailObj = [
    { name: 'Іван', email: 'ivan@example.com' },
    { name: 'Марія', email: 'maria@example.com' },
    { name: 'Петро', email: 'petro@example.com' },
    { name: 'Оля', email: 'olya@example.com' },
  ];

function getUsersEmail(emails, email){
    return emails.find(user => user.email === email);
}

const emaillsUser = getUsersEmail(emailObj, 'petro@example.com')
console.log(emaillsUser);
// ex 6
const ages = [ 
    { name: 'Іван', age: 25 },
    { name: 'Марія', age: 30 },
    { name: 'Петро', age: 35 },
    { name: 'Natali', age: 39 }, 
]

function getUserByAges(age, minAge, maxAge){
    return age.filter(useres => useres.age >= minAge && useres.age <= maxAge)
}

const ageUser = getUserByAges(ages, 30, 39)
console.log(ageUser);