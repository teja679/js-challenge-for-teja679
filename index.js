let firstNameValid = document.getElementById("firstNameValid");
let userNameValid = document.getElementById("userNameValid");
let lastNameValid = document.getElementById("lastNameValid");
let emailValid = document.getElementById("emailValid");
let phoneNumberValid = document.getElementById("phoneNumberValid");
let addressValid = document.getElementById("addressValid");

let firstNameInvalid = document.getElementById("firstNameInvalid");
let lastNameInvalid = document.getElementById("lastNameInvalid");
let userNameInvalid = document.getElementById("userNameInvalid");
let emailInvalid = document.getElementById("emailInvalid");
let phoneNumberInvalid = document.getElementById("phoneNumberInvalid");
let addressInvalid = document.getElementById("addressInvalid");


var x = 1;
const table = document.getElementById("myTable");
function fetchApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((jsonData) => {
      
      jsonData.map((json) => {
        const row = table.insertRow();
        row.classList = "table-row";
        const cell0 = row.insertCell(0);
        const cell1 = row.insertCell(1);
        const cell2 = row.insertCell(2);
        const cell3 = row.insertCell(3);
        const cell4 = row.insertCell(4);
        const cell5 = row.insertCell(5);
        const cell6 = row.insertCell(6);
        const cell7 = row.insertCell(7);

        cell0.innerHTML = json.id;
        cell1.innerHTML = json.name;
        cell2.innerHTML = json.username;
        cell3.innerHTML = json.email;
        cell4.innerHTML = `${json.address.street},
          ${json.address.suite},
          ${json.address.city},
          ${json.address.zipcode}`;
        cell5.innerHTML = json.phone;
        cell6.innerHTML = json.website;
        cell7.innerHTML = json.company.name;
        x++;
      });
    })
    .catch((err) => {
      alert("Something went wrong while fetching the users.");
    });
}
function validate() {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");
  const address = document.getElementById("address");
  const phoneNumber = document.getElementById("phoneNumber");
  const website = document.getElementById("website");
  const company = document.getElementById("company");

  if (firstName.value.length < 3) {
    firstNameInvalid.style.display = "block";
    firstNameValid.style.display = "none";
  } else {
    firstNameInvalid.style.display = "none";
    firstNameValid.style.display = "block";
  }
  if (lastName.value < 3) {
    lastNameInvalid.style.display = "block";
    lastNameValid.style.display = "none";
  } else {
    lastNameInvalid.style.display = "none";
    lastNameValid.style.display = "block";
  }
  var expr = /^[a-zA-Z0-9.]*$/;
  if (!expr.test(userName.value) || userName.value === "") {
    userNameInvalid.style.display = "block";
    userNameValid.style.display = "none";
  } else {
    userNameInvalid.style.display = "none";
    userNameValid.style.display = "block";
  }
  var emailPat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    !email.value.match(emailPat) ||
    email.value === ""
    // !email.includes("@") ||
    // !email.includes(".") ||
    // email.startsWith("@") ||
    // email.slice(email.lastIndexOf(".") + 1).length < 2
  ) {
    emailInvalid.style.display = "block";
    emailValid.style.display = "none";
  } else {
    emailInvalid.style.display = "none";
    emailValid.style.display = "block";
  }
  var pattern = /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (!phoneNumber.value.match(pattern)) {
    phoneNumberInvalid.style.display = "block";
    phoneNumberValid.style.display = "none";
  } else {
    phoneNumberInvalid.style.display = "none";
    phoneNumberValid.style.display = "block";
  }
  if (address.value === "") {
    addressInvalid.style.display = "block";
    addressValid.style.display = "none";
  } else {
    addressInvalid.style.display = "none";
    addressValid.style.display = "block";
  }
  
  if (
    firstName.value.length >= 3 &&
    lastName.value.length >= 3 &&
    expr.test(userName.value) &&
    userName.value !== "" &&
    email.value.match(emailPat) &&
    email.value !== "" &&
    phoneNumber.value.match(pattern) &&
    phoneNumber.value !== "" &&
    address.value !== ""
  ) {
    console.log("okk");
    const row = table.insertRow();
    row.classList = "table-row";
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);
    const cell5 = row.insertCell(5);
    const cell6 = row.insertCell(6);
    const cell7 = row.insertCell(7);

    cell0.innerHTML = x++;
    cell1.innerHTML = `${firstName.value} ${lastName.value}`;
    cell2.innerHTML = userName.value;
    cell3.innerHTML = email.value;
    cell4.innerHTML = address.value;
    cell5.innerHTML = phoneNumber.value;
    cell6.innerHTML = website.value;
    cell7.innerHTML = company.value;

    firstName.value = "";
    lastName.value = "";
    email.value = "";
    userName.value = "";
    address.value = "";
    phoneNumber.value = "";
    website.value = "";
    company.value = "";

    firstNameInvalid.style.display = "none";
    firstNameValid.style.display = "none";

    lastNameInvalid.style.display = "none";
    lastNameValid.style.display = "none";

    userNameInvalid.style.display = "none";
    userNameValid.style.display = "none";

    emailInvalid.style.display = "none";
    emailValid.style.display = "none";

    phoneNumberInvalid.style.display = "none";
    phoneNumberValid.style.display = "none";

    addressInvalid.style.display = "none";
    addressValid.style.display = "none";

    websiteInvalid.style.display = "none";
    websiteValid.style.display = "none";
  }
}
