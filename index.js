// Write your solution in this file!
let customerName = "bob";
function customerName() {
  return customerName;
}

function upperCaseCustomerName() {
  return customerName.toUpperCase();
}
console.log(upperCaseCustomerName());

function setBestCustomer() {
  return customerName;
}
function overwriteBestCustomer() {
  const newName = (customerName = "John");
  return newName;
}
console.log(overwriteBestCustomer());

function changeLeastFavoriteCustomer() {
  return newName;
}
console.log(changeLeastFavoriteCustomer());
