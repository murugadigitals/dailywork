import { sorters, mts, gds, mailguards } from "../../sourceData.js";

const employeeList = [...sorters, ...mts, ...gds, ...mailguards];
const employees1 = employeeList.sort((a, b) => a.localeCompare(b));
const employees = ["--Select Employee--", ...employees1];

const x = new Date().toLocaleDateString();
const xConstructorDate = new Date(x);
console.log();

// console.log(x.split("/").reverse());
// const y = x.split("/").reverse();
// console.log(x);
// console.log(y);
// const y = [...x];
// console.log(y);

// const newDate = `${y[1]}-${y[2]}-${y[0]}`;
// console.log(newDate);

document.getElementById("date").textContent = x.split("/").join("-");

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

  let date1modify = date1.split("-").reverse();
  let date2modify = date2.split("-").reverse();

  document.getElementById("designationDiv").textContent = document.getElementById("optDesignation").value;
  document.getElementById("divDesignation").textContent = document.getElementById("optDesignation").value;
  document.getElementById("withSetDiv").textContent = document.getElementById("withSet").value;
  // document.getElementById("cycleNoDiv").textContent = document.getElementById("cycleNo").value;
  document.getElementById("divDutyOn").textContent = `${date1modify[0]}-${date1modify[1]}-${date1modify[2]}`;

  // console.log();

  // document.getElementById("leaveOnDiv").textContent = `${date2modify[0]}-${date2modify[1]}-${date2modify[2]} `;

  document.querySelectorAll(".divEmployee").forEach((item) => {
    item.textContent = document.querySelector(".emp-names").value;
  });

  document.querySelectorAll(".leaveOn").forEach((item) => {
    item.textContent = `${date2modify[0]}-${date2modify[1]}-${date2modify[2]}`;
  });

  document.getElementById("daysCount").textContent = `CO leave applied on ======>${date2modify[0]}-${date2modify[1]}-${date2modify[2]}`;

  if (endDate < startDate) {
    daysCount.textContent = "End date must be on or after start date";
    return;
  }
  if (startDate === endDate) {
    daysCount.textContent = `CO leave on ======>${startDate}`;
  }

  document.getElementById("outputContainer").style.display = "block";
  document.body.contentEditable = "true";
  let cycle1 = +document.getElementById("cycleNo").value;

  if (cycle1 === 1) {
    document.getElementById("super").innerHTML = `1<sup>st</sup>`;
  } else if (cycle1 === 2) {
    document.getElementById("super").innerHTML = `2<sup>nd</sup>`;
  } else if (cycle1 === 3) {
    document.getElementById("super").innerHTML = `3<sup>rd</sup>`;
  } else {
    document.getElementById("super").innerHTML = `${cycle1}<sup>th</sup>`;
  }
  document.getElementById("super").style.textDecoration = "underline";
  document.getElementById("super").style.fontWeight = "bold";
  document.getElementById("divDutyOn").style.textDecoration = "underline";

  // document.getElementsByClassName("emp-name-div").textContent = document.getElementByClass("emp-names").value;
});
document.getElementById("print").addEventListener("click", function () {
  document.getElementById("inputContainer").style.display = "none";
  window.print();
  location.reload();
  // document.getElementById("inputContainer").style.display = "none";
});
