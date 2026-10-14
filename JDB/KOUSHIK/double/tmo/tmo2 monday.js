import { gds, mailguards, mdatePlus, mts } from "../../sourceData.js";

document.addEventListener("DOMContentLoaded", function () {
  let mgSort = [...mailguards, ...mts, ...gds];
  mgSort.sort((a, b) => a.localeCompare(b));

  const mgList = ["--Select Employee--", ...mgSort];
  const select = document.getElementById("optMg1");

  mgList.forEach((emp) => {
    const option = document.createElement("option");
    option.value = emp;
    option.textContent = emp;
    select.appendChild(option);
  });
});

document.getElementById("print").addEventListener("click", function () {
  const fields = {
    optMg1: "mg1test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

  window.print();
  // location.reload();
});

document.getElementById("preview").addEventListener("click", function () {
  const dateValue = document.getElementById("setDay").value;

  let dropDate = "";

  if (dateValue) {
    const date = new Date(dateValue + "T00:00:00");

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const formattedDate = dateValue.split("-").reverse().join("-");

    dropDate = `${dayName}, ${formattedDate}`;
  }
  document.getElementById("tableContainer").style.display = "block";
  document.getElementById("setDate").innerHTML = `Tirupati TMO - 2 Dated : ${dropDate} & Working Hours From 11:30 To 19:30`;
  document.getElementById("tableContainer").style.marginTop = "100px";
  document.getElementById("tableContainer").contentEditable = true;
});
