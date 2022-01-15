let name = "shivam";
let age = 26;
let hobby = "games";

const myself = (username, userage, userhobby) => {
  console.log(
    "this is user name " +
      username +
      " user age is " +
      userage +
      " and his hobby is" +
      userhobby
  );
};

const addition = (a, b) => a + b;

console.log(addition(1, 4));
myself(name, age, hobby);
