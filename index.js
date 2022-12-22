const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const username = document.getElementById("username");
const email = document.getElementById("email");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const website = document.getElementById("website");
const company = document.getElementById("company");
const noData = document.getElementById("no-data");


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
      });
    });
}
let x = 11;
function myFunction() {
  let formData = {
    no: x++,
    name: `${firstName.value} ${lastName.value}`,
    username: username.value,
    email: email.value,
    address: address.value,
    phone: phone.value,
    website: website.value,
    company: company.value,
  };

  const row = table.insertRow();
    row.classList = 'table-row'
  const cell0 = row.insertCell(0);
  const cell1 = row.insertCell(1);
  const cell2 = row.insertCell(2);
  const cell3 = row.insertCell(3);
  const cell4 = row.insertCell(4);
  const cell5 = row.insertCell(5);
  const cell6 = row.insertCell(6);
  const cell7 = row.insertCell(7);

  cell0.innerHTML = formData.no;
  cell1.innerHTML = formData.name;
  cell2.innerHTML = formData.username;
  cell3.innerHTML = formData.email;
  cell4.innerHTML = formData.address;
  cell5.innerHTML = formData.phone;
  cell6.innerHTML = formData.website;
  cell7.innerHTML = formData.company;

  firstName.value = ''
  lastName.value = ''
  email.value = ''
  username.value = ''
  address.value = ''
  phone.value = ''
  website.value = ''
  company.value = ''
}
