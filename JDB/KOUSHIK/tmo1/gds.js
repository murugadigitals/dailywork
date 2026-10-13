import { mdatePlus, outsiderMTS } from "../sourceData.js";

function bodyLoad1() {
  // employees.sort((a, b) => a.localeCompare(b));
  let sortedEmployees = [...outsiderMTS];
  sortedEmployees.sort((a, b) => a.localeCompare(b));

  const sortersList = ["--Select Employee--", ...sortedEmployees];

  // prettier-ignore
  const sortersDropdown = [
    "optGds1","optGds2",
    "optGds3","optGds4","optGds5","optGds6",
    "optGds7"
  ];

  /* prettier-ignore-end */

  sortersDropdown.forEach((id) => {
    const select = document.getElementById(id);

    sortersList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });
}
bodyLoad1();

document.getElementById("print").addEventListener("click", function (e) {
  e.preventDefault();
  const fields = {
    optGds1: "gds1test",
    optGds2: "gds2test",
    optGds3: "gds3test",
    optGds4: "gds4test",
    optGds5: "gds5test",
    optGds6: "gds6test",
    optGds7: "gds7test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

  document.getElementById("setName").innerHTML = `GDS Annexure Tirupati TMO - 1 Dated : ${mdatePlus}`;

  // Display the table before printing
  document.getElementById("tableContainer").style.display = "block";

  window.print();
});

document.getElementById("preview").addEventListener("click", function () {
  document.getElementById("tableContainer").style.display = "block";
  document.getElementById("setDate").innerHTML = `Tirupati HUB - 2A Dated : ${mdate} & Working Hours From 17:30 To 06:00`;
  document.getElementById("tableContainer").style.marginTop = "100px";
  document.getElementById("tableContainer").contentEditable = true;
});
