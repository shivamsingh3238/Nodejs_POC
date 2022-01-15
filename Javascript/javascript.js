var name = "shivam";
var age = 22;
var status = true;
function userself(username, userage, userstatus) {
  return (
    "User name is " +
    username +
    " user age is " +
    userage +
    " user status is " +
    userstatus
  );
}
console.log(userself(name, age, status));
