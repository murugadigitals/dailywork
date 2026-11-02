import { sorters, mts, gds, mailguards } from "../../sourceData.js";

const employeeList = [...sorters, ...mts, ...gds, ...mailguards];
const employees1 = employeeList.sort((a, b) => a.localeCompare(b));
const employees = ["--Select Employee--", ...employees1];

const x = new Date().toLocaleDateString();
// console.log(x.split("/"));
const y = x.split("/").reverse();
console.log(x);
console.log(y);
// const y = [...x];
// console.log(y);

const newDate = `${y[2]}-${y[1]}-${y[0]}`;
console.log(newDate);

document.getElementById("date").textContent = newDate;

// console.log(employees);
// const x1 = window.body.fontSize;
// console.log(x1);

window.addEventListener("load", function () {
  employees.forEach((emp) => {
    var option = document.createElement("option");
    option.text = emp;
    option.value = emp;

    document.querySelector(".emp-names").appendChild(option);
  });
});

document.getElementById("preview").addEventListener("click", function () {
  var date1 = document.getElementById("pohDutyOn").value;
  var date2 = document.getElementById("leaveOn").value;
  var cycle = document.getElementById("cycleNo").value;

  var daysCount = document.getElementById("daysCount");

  if (!date1 || !date2) {
    daysCount.textContent = "Please select both dates";
    daysCount.style.color = "red";
    return;
  }

  const startDate = new Date(date1); //+ "T00:00:00"
  const endDate = new Date(date2);

  document.getElementById("designationDiv").textContent = document.getElementById("optDesignation").value;
  document.getElementById("divDesignation").textContent = document.getElementById("optDesignation").value;

  document.querySelectorAll(".divEmployee").forEach((item) => {
    item.textContent = document.querySelector(".emp-names").value;
  });

  if (endDate < startDate) {
    daysCount.textContent = "End date must be on or after start date";
    return;
  }

  document.getElementById("outputContainer").style.display = "block";

  // document.getElementsByClassName("emp-name-div").textContent = document.getElementByClass("emp-names").value;
});
document.getElementById("print").addEventListener("click", function () {
  document.getElementById("inputContainer").style.display = "none";
  window.print();
  location.reload();
  // document.getElementById("inputContainer").style.display = "none";
});
