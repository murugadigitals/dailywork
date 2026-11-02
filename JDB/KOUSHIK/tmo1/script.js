import { gds, mailguards, mdatePlus, mts } from "../sourceData.js";

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
  // document.getElementById("setDate").innerHTML = `Tirupati TMO - 1 Dated : ${mdatePlus} & Working Hours From 17:30 To 06:00`;

  window.print();
  location.reload();
});

document.getElementById("preview").addEventListener("click", function () {
  document.getElementById("tableContainer").style.display = "block";
  const dateValue = document.getElementById("date").value;

  let dropDate = "";

  if (dateValue) {
    const date = new Date(dateValue + "T00:00:00");

    const dayName = date.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const formattedDate = dateValue.split("-").reverse().join("-");

    dropDate = `${dayName}, ${formattedDate}`;
  }

  document.getElementById("setDate").innerHTML = `Tirupati TMO - 1 Dated : ${dropDate} & Working Hours From 04:00 To 11:20`;
  document.getElementById("tableContainer").style.marginTop = "100px";
  document.getElementById("tableContainer").contentEditable = true;

  const fields = {
    optMg1: "mg1test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });
});
