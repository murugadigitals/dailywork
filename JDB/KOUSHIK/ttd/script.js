import { gds, mailguards, mdate, mts, sorters } from "../sourceData.js";

function bodyLoad1() {
  // employees.sort((a, b) => a.localeCompare(b));
  let sortedEmployees = [...sorters];
  sortedEmployees.sort((a, b) => a.localeCompare(b));

  let mgSort = [...mailguards, ...mts];
  mgSort.sort((a, b) => a.localeCompare(b));

  let mtsSort = [...mts];
  mtsSort.sort((a, b) => a.localeCompare(b));

  let gdsSort = [...gds];
  gdsSort.sort((a, b) => a.localeCompare(b));

  const sortersList = ["--Select Employee--", ...sortedEmployees];
  const mgList = ["--Select Employee--", ...mgSort];
  const mtsList = ["--Select Employee--", ...mtsSort];
  const gdsList = ["OS Arranged", ...gdsSort];

  // prettier-ignore
  const sortersDropdown = [
    "optHsa","optSuper",
  ];

  /* prettier-ignore-start */
  // const mgDropdown = ["optMg1", "optMg2"];
  const mtsDropdown = ["optMts1", "optMts2"];
  // const gdsDropdown = ["optGds1", "optGds2", "optGds3", "optGds4", "optGds5", "optGds6", "optGds7", "optGds8", "optGds9", "optGds10", "optGds11", "optGds12"];

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

  mtsDropdown.forEach((id) => {
    const select = document.getElementById(id);

    mtsList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });

  gdsDropdown.forEach((id) => {
    const select = document.getElementById(id);

    gdsList.forEach((emp) => {
      const option = document.createElement("option");

      option.value = emp;
      option.textContent = emp;

      if (id === "optGds5" && emp === "J Dilli Babu") {
        option.selected = true;
      }

      if (id === "optGds4" && emp === "N Hari Prasad") {
        option.selected = true;
      }

      // option.selected = "OS Arranged";

      select.appendChild(option);
    });
  });
}
function printClick() {
  window.print();
  // window.location.reload();
}

window.bodyLoad1 = bodyLoad1;
window.printClick = printClick;

document.getElementById("preview").addEventListener("click", function () {
  document.getElementById("tableContainer").style.display = "block";

  const fields = {
    optHsa: "hsatest",
    optSuper: "suptest",

    optMts1: "mg1test",
    optMts2: "mg2test",
  };

  Object.entries(fields).forEach(([source, target]) => {
    document.getElementById(target).textContent = document.getElementById(source).value;
  });

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

  if (document.getElementById("selectSet").value === "Tirupati HUB - 2A") {
    document.getElementById("setDate").innerHTML = `TTD SPL SET - 2A Dated : ${dropDate} & Working Hours From 17:30 To 06:00`;
  } else if (document.getElementById("selectSet").value === "Tirupati HUB - 2B") {
    document.getElementById("setDate").innerHTML = `TTD SPL SET - 2B Dated : ${dropDate} & Working Hours From 17:30 To 06:00`;
  }
  if (document.getElementById("selectSet").value === "Tirupati HUB - 1") {
    document.getElementById("setDate").innerHTML = `TTD SPL SET - 1 Dated : ${dropDate} & Working Hours From 08:45 To 16:45`;
  }
  // document.getElementById("setDate").innerHTML = `Tirupati HUB - 2A Dated : ${mdate} & Working Hours From 17:30 To 06:00`;
  document.getElementById("tableContainer").style.marginTop = "100px";
  document.getElementById("tableContainer").contentEditable = true;
});
