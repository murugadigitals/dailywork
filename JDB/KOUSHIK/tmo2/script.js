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
  const fields = {
    optMg1: "mg1test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

  document.getElementById("setDate").innerHTML = `Tirupati TMO - 2 Dated : ${mdatePlus} & Working Hours From 11:30 To 19:30`;

  window.print();
  // location.reload();
});

document.getElementById("preview").addEventListener("click", function () {
  document.getElementById("tableContainer").style.display = "block";
  document.getElementById("setDate").innerHTML = `Tirupati TMO - 2 Dated : ${mdatePlus} & Working Hours From 11:30 To 19:30`;
  document.getElementById("tableContainer").style.marginTop = "100px";
  document.getElementById("tableContainer").contentEditable = true;
});
